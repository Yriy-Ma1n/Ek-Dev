import { MongoClient } from "mongodb"
require("dotenv").config()
const uri = process.env.MONGO_URL
const client = new MongoClient(uri)

export async function connect() {
    try {
        let ProductSave
        let userSave
        await client.connect()
        ProductSave = client.db("Product")

        userSave = client.db("UserData")

    return {ProductSave, userSave}
    } catch (err) {
        console.log('I got error DB',err)
        return null
    }
}
