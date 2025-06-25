import * as path from "path";
import type { LaptopItem } from "./Types/LapTopItem-type";
import { error } from "console";
import { ObjectId } from "mongodb";
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express();

const PORT = process.env.PORT;

const uri = process.env.MONGO_URL

const client = new MongoClient(uri)

app.use(cors());

//sharing bundle
app.use(express.static("public/browser"))

app.use(express.json())
let dbSave;
async function connect() {
    try {
        await client.connect()
        dbSave = client.db("Product")

    } catch (err) {
        console.log(err)
    }
}
connect()




app.get('/products', async (req, res) => {
    const page = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.limit) || 5

    const products = await dbSave.collection('Product')
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


    const model = await dbSave.collection('PopularModel')
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

    const review = await dbSave.collection('review').find().toArray()

    res.send(review)
})
app.get('/CategoryList', async (req, res) => {
    const CategoryList = await dbSave.collection('Category-list').find().toArray()

    res.send(CategoryList)
})
app.get('/Laptop', async (req, res) => {
    const LapTopData = await dbSave.collection('LapTop').find().toArray() as LaptopItem[]

    res.send(LapTopData)
})
app.get('/search', async (req, res) => {
    const searchType = req.query.q || ''
    console.log(searchType)
    const allFindedData = await dbSave.collection('AllTovar').find({
        name: { $regex: searchType, $options: 'i' }
    }).toArray()
    res.send(allFindedData)
})
app.get('/adminpass', async (req, res)=>{
    const getAdminPass = await dbSave.collection('AdminPass').find().toArray()

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

    if (typeof (body.img) === 'string' && typeof (body.name) === 'string' && typeof (body.cost) === 'string' && typeof(body.description) === 'object') {
        console.log('all field')
        const collectionPopular = await dbSave.collection('PopularModel')
        const collectionAllTovar = await dbSave.collection('AllTovar')
        const collectionAdmin = await dbSave.collection('AdminAdded')

        const result = await collectionPopular.insertOne(req.body)
        await collectionAllTovar.insertOne(req.body)
        await collectionAdmin.insertOne(req.body)
        res.send(result)
    }else{
        console.log('bad')
         res.status(400).json({
            error: 'Bad Request',
            message: 'should to be 4 field, img,name,cost,description and all field string'
        });
    }
})

app.delete('/DeleteProduct', async (req, res)=>{

    const body = req.body
    
    if(!body.id){
        res.status(400).json({
            error:'Bad Request',
            message:"You have to put id product"
        })
        return 
    }
    const collectionPopular = await dbSave.collection('PopularModel')
    const collectionAllTovar = await dbSave.collection('AllTovar')
    const collectionAdmin = await dbSave.collection("AdminAdded")

    const rightId = new ObjectId(body.id)
    collectionAllTovar.deleteOne({_id:rightId})
    collectionPopular.deleteOne({_id:rightId})
    collectionAdmin.deleteOne({_id:rightId})

    res.send({status:"Everything okay"})
})
app.get('/adminTovar', async (req, res)=>{
        const collectionAdmin = await dbSave.collection('AdminAdded').find().toArray()
       
        res.send(collectionAdmin)
   
})
  
// sharing bundle

// const indexPath = path.resolve(__dirname, "public/browser/index.html")

// app.use((req, res) => {
//     res.sendFile(indexPath)
// });



app.listen(PORT, () => {
    console.log(`Server was started on port ${PORT}`);
});
