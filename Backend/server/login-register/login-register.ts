import { userSave } from "../../server";
const express = require("express")

export const router = express.Router()

const cors = require("cors")

router.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
router.post('/register', async (req, res) => {
    const { name, password, profileImg } = req.body
    const userCollection = await userSave.collection("Users")
    const finded = await userCollection.findOne({ name })
    if (finded) {
        res.status(403).json({ error: "login already exist" })
    } else {
        userCollection.insertOne({ name: name, password: password, profileImg: profileImg })

        res.status(200).json({ okay: true })
    }
})

router.post('/login', async (req, res) => {
    const { name, password } = req.body
    const userCollection = await userSave.collection("Users")
    const finded = await userCollection.findOne({ name })

    if (finded) {
        const areSame = password === finded.password
        if (areSame) {
            req.session.user = finded
            req.session.isAuthenticated = true
            req.session.save()

            res.send({
                succes: true,
                user: {
                    name: finded.name,
                    _id: finded._id,
                    password: finded.password
                }
            })
        } else {
            res.status(403).json({ error: 'password not equal' })
        }
    } else {
        res.status(403).json({ error: 'nobody finded' })
    }
})
router.delete('/logout', async (req, res) => {
    req.session.destroy(err =>{
        if(err){
            return res.status(500).send({message:'err'})
        }
        res.clearCookie('user-session', {
            path:'/'
        })
        res.send({message:'Logout1'})
    }) 
   
    
})
