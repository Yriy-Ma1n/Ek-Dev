const { Telegraf } = require("telegraf");
const express = require("express")
let ChatId = process.env.ChatId

const bot = new Telegraf(process.env.BotId)

const app = express()

bot.start((ctx) => {
    ctx.reply(`Welcome to E-Katalog-Mini`)
})

app.post('/Message', (req, res, next) => {

    try{
        bot.telegram.sendMessage(process.env.ChatId, `📦 Нове замовлення успішно створено! ✅  ${req.body.message}`)
    }catch(error){
        console.log(error)
    }

    res.send({response:'Message was sended'})
})

bot.launch()