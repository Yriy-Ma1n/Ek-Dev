"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.bot = void 0;
var Telegraf = require("telegraf").Telegraf;
var server_1 = require("../../server");
var passwordHash = require("password-hash");
var express = require("express");
var app = express();
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
exports.router.post('/dropPassword', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, user, randomPassword, hashPassword, userCollection, user_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email;
                return [4 /*yield*/, server_1.userSave.collection("Users").findOne({ name: name })];
            case 1:
                user = _b.sent();
                console.log(user);
                if (user.email !== email) {
                    res.status(403).json({ error: "Email та user не зівпадають" });
                    return [2 /*return*/];
                }
                try {
                    randomPassword = crypto.randomUUID().slice(0, 6);
                    hashPassword = passwordHash.generate(randomPassword);
                    userCollection = server_1.userSave.collection("Users");
                    user_1 = userCollection.findOne({ name: name });
                    userCollection.updateOne({ name: name }, { $set: { password: hashPassword } });
                    exports.bot.telegram.sendMessage(process.env.ChatId, "\u0412\u0430\u0448 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0443 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442: \"".concat(randomPassword, "\". \u041E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u043E \u0437\u043C\u0456\u043D\u0456\u0442\u044C \u0439\u043E\u0433\u043E!"));
                    res.send({ message: 'password was sent' });
                }
                catch (err) {
                    res.status(403).json({ error: "Щось пішло не так" });
                }
                return [2 /*return*/];
        }
    });
}); });
app.use('', exports.router);
