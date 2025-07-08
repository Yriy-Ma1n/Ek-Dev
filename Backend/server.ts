
import { router as BotRouter } from "./server/bot/bot";
import { router as LoginRouter } from "./server/login-register/login-register";
import { router as DeleteRouter } from "./server/requests/delete/request-delete";
import { router as PostRouter } from "./server/requests/post-patch/request-post";
import { router as GetRouter } from "./server/requests/get/request-get";
import { connect } from "./server/connectToBd/connectBd"
import { bot } from "./server/bot/bot"
export let ProductSave;
export let userSave


const express = require('express');
const cors = require('cors');

const session = require("express-session")

require('dotenv').config();



const PORT = process.env.PORT;



const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    maxAge: 1000 * 60 * 60 * 24
}));
async function startServer() {
    try {
        const dbConnect = await connect()

        ProductSave = dbConnect.ProductSave
        userSave = dbConnect.userSave




        app.use(express.static("public/browser"))
        app.use(express.json())

        app.use(session({
            secret: process.env.secretSession,
            resave: false,
            name: 'user-session',
            saveUninitialized: false,
            cookie: {
                path:'/',
                secure: false,
                maxAge: 1000 * 60 * 60
            }
        }))

        app.use('', BotRouter)
        bot.launch()
        app.use('', LoginRouter)
        app.use('', DeleteRouter)
        app.use('', PostRouter)
        app.use('', GetRouter)

        app.use((req, res, next) => {
            res.set('Cache-Control', 'no-store');
            next();
        });

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



