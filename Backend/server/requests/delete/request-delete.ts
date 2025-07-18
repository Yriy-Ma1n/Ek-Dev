
const express = require("express")
import { ObjectId } from "mongodb"
import { ProductSave, userSave } from "../../../server"
export const router = express.Router()


router.delete('/DeleteProduct',async (req, res) => {

    const body = req.body

    if (!body.id) {
        res.status(400).json({
            error: 'Bad Request',
            message: "You have to put id product"
        })
        return
    }
    const collectionPopular = await ProductSave.collection('PopularModel')
    const collectionAllTovar = await ProductSave.collection('AllTovar')
    const collectionAdmin = await ProductSave.collection("AdminAdded")

    const rightId = new ObjectId(body.id)
    await collectionAllTovar.deleteOne({ _id: rightId })
    await collectionPopular.deleteOne({ _id: rightId })
    await collectionAdmin.deleteOne({ _id: rightId })

    res.send({ status: "Everything okay" })
})
router.delete('/clearCard', async(req,res)=>{
    const id = req.session.user._id

    const Finduser = await userSave.collection("Users")

    const idLikeObj = new ObjectId(id)

    const user = await Finduser.findOne({ _id: idLikeObj })
    if(user){
        await Finduser.updateOne(
            {_id:idLikeObj},
            {$set:{cardItem:[]}}
        )
        res.send({message:'Your card was clear'})
    }
})