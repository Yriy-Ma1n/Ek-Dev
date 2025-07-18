import { userSave } from "../../server";
const express = require("express")
const  passwordHash  =  require("password-hash")

export const router = express.Router()

const cors = require("cors")

router.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
router.post('/register', async (req, res) => {
    const { name, password, profileImg, cardItem, OrderHistory } = req.body
    const userCollection = await userSave.collection("Users")
    const finded = await userCollection.findOne({ name })
    if (finded) {
        res.status(403).json({ error: "login already exist" })
    } else {
        const hashedPassword = passwordHash.generate(password)

        userCollection.insertOne({ name: name, password: hashedPassword, profileImg: profileImg, cardItem:cardItem, OrderHistory:OrderHistory })

        res.status(200).json({ okay: true })
    }
})

router.post('/login', async (req, res) => {
    const { name, password } = req.body
    const userCollection = await userSave.collection("Users")
    const finded = await userCollection.findOne({ name })

    if (finded) {
        const areSame = passwordHash.verify(password, finded.password)
        
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
