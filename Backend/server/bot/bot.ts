const { Telegraf } = require("telegraf");
import { ObjectId } from "mongodb";
import { userSave } from "../../server";
const passwordHash = require("password-hash")
const express = require("express")
const app = express()
require('dotenv').config();


export const bot = new Telegraf(process.env.BotId)

export const router = express.Router()

bot.start((ctx) => {
    ctx.reply(`Welcome to E-Katalog-Mini`)
})

router.post('/Message', (req, res, next) => {
    try {
        bot.telegram.sendMessage(process.env.ChatId, `📦 Нове замовлення успішно створено! ✅  ${req.body.message}`)
    } catch (error) {
        console.log('You got error in BOT', error)
    }

    res.send({ response: 'Message was sent' })
})
router.post('/dropPassword', async (req, res) => {
    const { name, email } = req.body

    const user = await userSave.collection("Users").findOne({ name })
   

    if (user.email !== email) {
        res.status(403).json({ error: "Email та user не зівпадають" })
        return
    }
    try {
        const randomPassword = crypto.randomUUID().slice(0, 6)

        const hashPassword = passwordHash.generate(randomPassword)

        const userCollection = userSave.collection("Users")

        const user = userCollection.findOne({name:name})


        userCollection.updateOne({ name: name }, { $set: { password: hashPassword } })
        bot.telegram.sendMessage(process.env.ChatId, `Ваш тимчасовий пароль для входу в аккаунт: "${randomPassword}". Обовязково змініть його!`)
        res.send({ message: 'password was sent' })
    } catch (err) {
        res.status(403).json({ error: "Щось пішло не так" })
    }
})
app.use('', router)