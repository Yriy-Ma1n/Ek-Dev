const { Telegraf } = require("telegraf");
const express = require("express")
require('dotenv').config();


const bot = new Telegraf(process.env.BotId)

export const router = express.Router()

bot.start((ctx) => {
    ctx.reply(`Welcome to E-Katalog-Mini`)
})

router.post('/Message', (req, res, next) => {
    console.log('213')
    try{
        bot.telegram.sendMessage(process.env.ChatId, `📦 Нове замовлення успішно створено! ✅  ${req.body.message}`)
    }catch(error){
        console.log(error)
    }

    res.send({response:'Message was sent'})
})

bot.launch()
