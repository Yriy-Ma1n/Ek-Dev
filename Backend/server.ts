import { error } from "console";
import type { LaptopItem } from "./Types/LapTopItem-type";
import { ObjectId } from "mongodb";

import { router as BotRouter } from "./server/bot/bot";
import { router as LoginRouter } from "./server/login-register/login-register";
import { router as DeleteRouter } from "./server/requests/delete/request-delete";
import { router as PostRouter } from "./server/requests/post/request-post";
import { router as GetRouter } from "./server/requests/get/request-get";
import { connect } from "./server/connectToBd/connectBd"

export let ProductSave;
export let userSave


const express = require('express');
const cors = require('cors');
const User = require("./models/user.js")
const { MongoClient } = require('mongodb');
const { Telegraf } = require("telegraf");

const session = require("express-session")

require('dotenv').config();



const PORT = process.env.PORT;

const userUri = process.env.USER_URI



async function startServer() {
    try {
        const dbConnect = await connect()

        ProductSave = dbConnect.ProductSave
        userSave = dbConnect.userSave

        const app = express();

        app.use(cors());
        app.use(express.static("public/browser"))
        app.use(express.json())

        app.use(session({
            secret: process.env.secretSession,
            resave: false,
            saveUninitialized: false
        }))

        app.use('', BotRouter)
        app.use('', LoginRouter)
        app.use('', DeleteRouter)
        app.use('', PostRouter)
        app.use('', GetRouter)

        app.listen(PORT, () => {
            console.log(`Server was started on port ${PORT}`);
        });


    } catch (e) {
        console.log(e)
    }
}

startServer()

//sharing bundle


//sesion

// sharing bundle

// const indexPath = path.resolve(__dirname, "public/browser/index.html")

// app.use((req, res) => {
//     res.sendFile(indexPath)
// });



