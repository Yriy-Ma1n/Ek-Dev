var Telegraf = require("telegraf").Telegraf;
var express = require("express");
require('dotenv').config();
var ChatId = process.env.ChatId;
var bot = new Telegraf(process.env.BotId);
var app = express();
bot.start(function (ctx) {
    ctx.reply("Welcome to E-Katalog-Mini");
});
app.post('/Message', function (req, res, next) {
    console.log('213');
    try {
        bot.telegram.sendMessage(process.env.ChatId, "\uD83D\uDCE6 \u041D\u043E\u0432\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E! \u2705  ".concat(req.body.message));
    }
    catch (error) {
        console.log(error);
    }
    res.send({ response: 'Message was sended' });
});
bot.launch();
