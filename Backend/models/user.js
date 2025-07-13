const mongoseConstantly = require("mongoose") 
const { Schema } = require("mongoose")
const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = mongoseConstantly.model("UsersChema", UserSchema, "Users")

module.exports = UserModel