import { ObjectId } from "mongodb";
import { ProductSave, userSave } from "../../../server";
import { error } from "console";
const express = require("express")

export const router = express.Router()


router.get('/products', async (req, res) => {
    const page = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.limit) || 5

    const products = await ProductSave.collection('Product')
        .find()
        .skip(page * limit)
        .limit(limit)
        .toArray();

    if (products.length === 0) {
        res.send('[]')
    } else {
        res.json(products)
    }


});
router.get('/PopularModel', async (req, res) => {
    const page = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.limit) || 5


    const model = await ProductSave.collection('PopularModel')
        .find()
        .skip(page * limit)
        .limit(limit)
        .toArray()

    if (model.length === 0) {
        res.send(model)
    } else {
        res.json(model)
    }
})
router.get('/review', async (req, res) => {

    const review = await ProductSave.collection('review').find().toArray()

    res.send(review)
})
router.get('/CategoryList', async (req, res) => {
    const CategoryList = await ProductSave.collection('Category-list').find().toArray()

    res.send(CategoryList)
})

router.get('/search', async (req, res) => {
    const searchType = req.query.q || ''
    const allFindedData = await ProductSave.collection('AllTovar').find({
        name: { $regex: searchType, $options: 'i' }
    }).toArray()
    res.send(allFindedData)
})
router.get('/adminpass', async (req, res) => {
    const getAdminPass = await ProductSave.collection('AdminPass').find().toArray()

    res.send(getAdminPass)

})

router.get('/adminTovar', async (req, res) => {
    const collectionAdmin = await ProductSave.collection('AdminAdded').find().toArray()
    res.send(collectionAdmin)

})
router.get('/userInAccount', async (req, res)=>{
    if(req.session.isAuthenticated && req.session.user?._id){
        const user = await userSave.collection("Users").findOne({_id:new ObjectId(req.session.user._id)})
        if(user){
            res.send(user)
        }else{
            res.status(400).send({error:'User not found'})
        }
        return
    }

    res.send({userInAccount:false})
    
})