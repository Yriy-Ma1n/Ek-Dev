import { error } from "console";
import type { LaptopItem } from "./Types/LapTopItem-type";
import { ObjectId } from "mongodb";
const express = require('express');
const cors = require('cors');
const User = require("./models/user.js")
const { MongoClient } = require('mongodb');
const { Telegraf } = require("telegraf");

const session = require("express-session")

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const uri = process.env.MONGO_URL
const userUri = process.env.USER_URI

const client = new MongoClient(uri)
let ChatId = process.env.ChatId

// const bot = new Telegraf(process.env.BotId)


app.use(cors());

//sharing bundle
app.use(express.static("public/browser"))
app.use(express.json())

//sesion
app.use(session({
    secret: process.env.secretSession,
    resave:false,
    saveUninitialized: false
}))

let ProductSave;
let userSave


// bot.start((ctx) => {
//     ctx.reply(`Welcome to E-Katalog-Mini`)
// })

async function connect() {
    try {
        await client.connect()
        ProductSave = client.db("Product")

        userSave = client.db("UserData")
    } catch (err) {
        console.log(err)
    }
}
connect()


app.post('/register', async (req, res) => {
    const { name, password } = req.body
    const userCollection = await userSave.collection("Users")
    const finded = await userCollection.findOne({ name })
    if (finded) {
        res.status(403).json({ error: "login already exist" })
    } else {
        userCollection.insertOne({ name: name, password: password })

        res.status(200).json({ okay: true })
    }
})

app.post('/login', async (req, res)=>{
    
    const { name, password } = req.body
    const userCollection = await userSave.collection("Users")
    const finded = await userCollection.findOne({name})

    if(finded){
        const areSame = password === finded.password
        if(areSame){
            req.session.user = finded
            req.session.isAuthenticated = true 
            req.session.save()
            res.send({
                succes:true,
                user:{
                    name:finded.name,
                    _id:finded._id,
                    password:finded.password
                }
            })
        }else{
            res.status(403).json({error:'password not equal'})
        }
    }else{
        res.status(403).json({error:'nobody finded'})
    }
})
app.get('/products', async (req, res) => {
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
app.get('/PopularModel', async (req, res) => {
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
app.get('/review', async (req, res) => {

    const review = await ProductSave.collection('review').find().toArray()

    res.send(review)
})
app.get('/CategoryList', async (req, res) => {
    const CategoryList = await ProductSave.collection('Category-list').find().toArray()

    res.send(CategoryList)
})
app.get('/Laptop', async (req, res) => {
    const LapTopData = await ProductSave.collection('LapTop').find().toArray() as LaptopItem[]

    res.send(LapTopData)
})
app.get('/search', async (req, res) => {
    const searchType = req.query.q || ''
    const allFindedData = await ProductSave.collection('AllTovar').find({
        name: { $regex: searchType, $options: 'i' }
    }).toArray()
    res.send(allFindedData)
})
app.get('/adminpass', async (req, res) => {
    const getAdminPass = await ProductSave.collection('AdminPass').find().toArray()

    res.send(getAdminPass)

})

app.post('/addProduct', async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            error: 'Bad Request',
            message: 'something wrong with body'
        })
        return
    }
    const body = req.body

    if (typeof (body.img) === 'string' && typeof (body.name) === 'string' && typeof (body.cost) === 'string' && typeof (body.description) === 'object') {
        const collectionPopular = await ProductSave.collection('PopularModel')
        const collectionAllTovar = await ProductSave.collection('AllTovar')
        const collectionAdmin = await ProductSave.collection('AdminAdded')

        const result = await collectionPopular.insertOne(req.body)
        await collectionAllTovar.insertOne(req.body)
        await collectionAdmin.insertOne(req.body)
        res.send(result)
    } else {
        res.status(400).json({
            error: 'Bad Request',
            message: 'should to be 4 field, img,name,cost,description and all field string'
        });
    }
})

app.delete('/DeleteProduct', async (req, res) => {

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
app.get('/adminTovar', async (req, res) => {
    const collectionAdmin = await ProductSave.collection('AdminAdded').find().toArray()
    collectionAdmin.insertOne()
    res.send(collectionAdmin)

})
// app.post('/Message', (req, res, next) => {

//     try{
//         bot.telegram.sendMessage(process.env.ChatId, `📦 Нове замовлення успішно створено! ✅  ${req.body.message}`)
//     }catch(error){
//         console.log(error)
//     }

//     res.send({response:'Message was sended'})
// })
// bot.launch()

// sharing bundle

// const indexPath = path.resolve(__dirname, "public/browser/index.html")

// app.use((req, res) => {
//     res.sendFile(indexPath)
// });



app.listen(PORT, () => {
    console.log(`Server was started on port ${PORT}`);
});
