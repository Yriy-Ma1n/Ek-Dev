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
exports.userSave = exports.ProductSave = void 0;
var bot_1 = require("./server/bot/bot");
var login_register_1 = require("./server/login-register/login-register");
var request_delete_1 = require("./server/requests/delete/request-delete");
var request_post_1 = require("./server/requests/post/request-post");
var request_get_1 = require("./server/requests/get/request-get");
var connectBd_1 = require("./server/connectToBd/connectBd");
var express = require('express');
var cors = require('cors');
var User = require("./models/user.js");
var MongoClient = require('mongodb').MongoClient;
var Telegraf = require("telegraf").Telegraf;
var session = require("express-session");
require('dotenv').config();
var PORT = process.env.PORT;
var userUri = process.env.USER_URI;
var app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    maxAge: 1000 * 60 * 60 * 24
}));
function startServer() {
    return __awaiter(this, void 0, void 0, function () {
        var dbConnect, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, connectBd_1.connect)()];
                case 1:
                    dbConnect = _a.sent();
                    exports.ProductSave = dbConnect.ProductSave;
                    exports.userSave = dbConnect.userSave;
                    app.use(express.static("public/browser"));
                    app.use(express.json());
                    app.use(session({
                        secret: process.env.secretSession,
                        resave: false,
                        saveUninitialized: false,
                        cookie: {
                            secure: false,
                            maxAge: 1000 * 60 * 60
                        }
                    }));
                    app.use('', bot_1.router);
                    app.use('', login_register_1.router);
                    app.use('', request_delete_1.router);
                    app.use('', request_post_1.router);
                    app.use('', request_get_1.router);
                    app.listen(PORT, function () {
                        console.log("Server was started on port ".concat(PORT));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
startServer();
//sharing bundle
//sesion
// sharing bundle
// const indexPath = path.resolve(__dirname, "public/browser/index.html")
// app.use((req, res) => {
//     res.sendFile(indexPath)
// });
