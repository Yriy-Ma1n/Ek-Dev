const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://ShopDataBase:qXBMPLL12@cluster0.4hf95wl.mongodb.net/";
const client = new MongoClient(uri)

app.use(cors());

let dbSave;
async function connect() {
    try{
        await client.connect()
        dbSave = client.db("Product")
       
    }catch(err){
        console.log(err)
    }
}
connect()

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`);
});

app.get('/products', async (req, res) => {
    const page = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.limit) || 5

   const products = await dbSave.collection('Product')
   .find()
   .skip(page * limit)
   .limit(limit)
   .toArray(); 
    
   if(products.length === 0){
    res.send('[]')
   }else{
    res.json(products)
   }
 
  
});
app.get('/PopularModel', async(req, res)=>{
    const page = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.limit) || 5

    
    const model = await dbSave.collection('PopularModel')
    .find()
    .skip(page * limit)
    .limit(limit)
    .toArray()

    if(model.length === 0){
        res.send(model)
    }else{
        res.json(model)
    }
})

