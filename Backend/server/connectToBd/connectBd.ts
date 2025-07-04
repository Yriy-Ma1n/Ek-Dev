import { MongoClient } from "mongodb"

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
        console.log(err)
        return null
    }
}
