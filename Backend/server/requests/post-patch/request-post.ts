const express = require("express")
import { ObjectId } from "mongodb"
import { ProductSave, userSave } from "../../../server"
import { connect } from "../../connectToBd/connectBd"
import { error } from "console"
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
        res.send({ succes: true })
    } else {
        res.status(400).json({
            error: 'Bad Request',
            message: 'should to be 4 field, img,name,cost,description and all field string'
        });
    }
})
router.patch('/changeProfileAvatar', async (req, res) => {
    const { URL } = req.body
    const id = req.session.user._id


    const userDataBase = await userSave.collection("Users")

    const user = await userDataBase.findOne({ _id: new ObjectId(id) })

    if (user) {
        await userDataBase.updateOne(
            { _id: new ObjectId(id) },
            { $set: { profileImg: URL } }
        )
        res.send({ status: 'Your avatar image was changed' })
    } else {
        res.status(400).send({ error: 'User not found' })
    }
})
router.patch('/addItemToCard', async (req, res) => {

    const { item } = req.body
    const id = req.session.user._id

    const Finduser = await userSave.collection("Users")

    const idLikeObj = new ObjectId(id)

    if (!ObjectId.isValid(idLikeObj)) res.status(403).json({ error: 'UserId Invalid' })

    const user = await Finduser.findOne({ _id: idLikeObj })

    try {
        const userHasItem = await Finduser.findOne({
            _id: idLikeObj,
            "cardItem._Itemid": item._Itemid
        })
        if (userHasItem) {
            await Finduser.updateOne(
                { _id: idLikeObj, "cardItem._Itemid": item._Itemid },
                { $inc: { "cardItem.$.quantity": 1 } }
            )
            res.send({ message: 'quantity was updated' })
        } else {
            await Finduser.updateOne(
                { _id: idLikeObj },
                { $push: { cardItem: item } }
            )
            res.send({ status: 'Item was added' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
})
router.patch('/removeItemFromCard', async (req, res) => {
    const { itemId } = req.body
    const id = req.session.user._id

    const Finduser = await userSave.collection("Users")

    const idLikeObj = new ObjectId(id)

    if (!ObjectId.isValid(idLikeObj)) res.status(403).json({ error: 'UserId Invalid' })

    const user = await Finduser.findOne({ _id: idLikeObj })

    if (user) {
        await Finduser.updateOne(
            { _id: idLikeObj },
            { $pull: { cardItem: { _Itemid: itemId } } }
        )
        res.send({ status: 'Item was added' })
    } else {
        res.status(400).send({ error: 'error' })

    }
})

router.patch('/deleteItemFromCard', async (req, res) => {
    const { itemName } = req.body
    const id = req.session.user._id

    const Finduser = await userSave.collection("Users")

    const idLikeObj = new ObjectId(id)

    const user = await Finduser.findOne({ _id: idLikeObj })

    if (user) {
        await Finduser.updateOne(
            { _id: idLikeObj },
            { $pull: { cardItem: { name: itemName } } }
        )
        res.send({ data: 'everything okay' })
    } else {
        res.status(404).json({ error: "something went wrong" })
    }
})

router.post('/addCommentToProduct', async (req, res) => {
    const { name, date, image, message, tovarId } = req.body

    const findedCollection = await ProductSave.collection("AllTovar")

    const idLikeObjId = new ObjectId(tovarId)
   

    findedCollection.updateOne({ _id: idLikeObjId }, { $push: { comments: { name: name, date: date, image: image, message: message } } })
    res.send({ okay: true })

})