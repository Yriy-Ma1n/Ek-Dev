const express = require("express")
import { ObjectId } from "mongodb"
import { ProductSave, userSave } from "../../../server"
import { connect } from "../../connectToBd/connectBd"
export const router = express.Router()


router.post('/addProduct', async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            error: 'Bad Request',
            message: 'something wrong with body'
        })
        return
    }

    if (!ProductSave) {
        res.status(500).json({
            error: 'Internal Server Error',
            message: 'Database connection not established'
        });
        return;
    }
    const body = req.body

    if (typeof (body.img) === 'string' && typeof (body.name) === 'string' && typeof (body.cost) === 'string' && typeof (body.description) === 'object') {

        const collectionPopular = ProductSave.collection('PopularModel')
        const collectionAllTovar = ProductSave.collection('AllTovar')
        const collectionAdmin = ProductSave.collection('AdminAdded')

        await collectionPopular.insertOne(req.body)
        await collectionAllTovar.insertOne(req.body)
        await collectionAdmin.insertOne(req.body)
        res.send({succes:true})
    } else {
        res.status(400).json({
            error: 'Bad Request',
            message: 'should to be 4 field, img,name,cost,description and all field string'
        });
    }
})
router.post('/changeProfileAvatar',async (req, res)=>{
    const {id, URL } = req.body

    const userDataBase = await userSave.collection("Users")

    const user = await userDataBase.findOne({_id:new ObjectId(id)})
    
    if(user){
        await userDataBase.updateOne(
            {_id:new ObjectId(id)},
            {$set:{ profileImg: URL }}
        )
        res.send({status:'Your avatar image was changed'})
    }else{
        res.status(400).send({error:'User not found'})
    }

    

})