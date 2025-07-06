"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.bot = void 0;
var Telegraf = require("telegraf").Telegraf;
var express = require("express");
require('dotenv').config();
exports.bot = new Telegraf(process.env.BotId);
exports.router = express.Router();
exports.bot.start(function (ctx) {
    ctx.reply("Welcome to E-Katalog-Mini");
});
exports.router.post('/Message', function (req, res, next) {
    try {
        exports.bot.telegram.sendMessage(process.env.ChatId, "\uD83D\uDCE6 \u041D\u043E\u0432\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E! \u2705  ".concat(req.body.message));
    }
    catch (error) {
        console.log('You got error in BOT', error);
    }
    res.send({ response: 'Message was sent' });
});
