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
var botRout = require("./server/bot/bot.ts");
var mongodb_1 = require("mongodb");
var express = require('express');
var cors = require('cors');
var User = require("./models/user.js");
var MongoClient = require('mongodb').MongoClient;
var Telegraf = require("telegraf").Telegraf;
var session = require("express-session");
require('dotenv').config();
var app = express();
var PORT = process.env.PORT;
var uri = process.env.MONGO_URL;
var userUri = process.env.USER_URI;
var client = new MongoClient(uri);
app.use(cors());
//sharing bundle
app.use(express.static("public/browser"));
app.use(express.json());
//sesion
app.use(session({
    secret: process.env.secretSession,
    resave: false,
    saveUninitialized: false
}));
app.use('/', botRout);
var ProductSave;
var userSave;
function connect() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    ProductSave = client.db("Product");
                    userSave = client.db("UserData");
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
connect();
app.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, userCollection, finded;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, password = _a.password;
                return [4 /*yield*/, userSave.collection("Users")];
            case 1:
                userCollection = _b.sent();
                return [4 /*yield*/, userCollection.findOne({ name: name })];
            case 2:
                finded = _b.sent();
                if (finded) {
                    res.status(403).json({ error: "login already exist" });
                }
                else {
                    userCollection.insertOne({ name: name, password: password });
                    res.status(200).json({ okay: true });
                }
                return [2 /*return*/];
        }
    });
}); });
app.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, userCollection, finded, areSame;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, password = _a.password;
                return [4 /*yield*/, userSave.collection("Users")];
            case 1:
                userCollection = _b.sent();
                return [4 /*yield*/, userCollection.findOne({ name: name })];
            case 2:
                finded = _b.sent();
                if (finded) {
                    areSame = password === finded.password;
                    if (areSame) {
                        req.session.user = finded;
                        req.session.isAuthenticated = true;
                        req.session.save();
                        res.send({
                            succes: true,
                            user: {
                                name: finded.name,
                                _id: finded._id,
                                password: finded.password
                            }
                        });
                    }
                    else {
                        res.status(403).json({ error: 'password not equal' });
                    }
                }
                else {
                    res.status(403).json({ error: 'nobody finded' });
                }
                return [2 /*return*/];
        }
    });
}); });
app.get('/products', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = parseInt(req.query.page) || 0;
                limit = parseInt(req.query.limit) || 5;
                return [4 /*yield*/, ProductSave.collection('Product')
                        .find()
                        .skip(page * limit)
                        .limit(limit)
                        .toArray()];
            case 1:
                products = _a.sent();
                if (products.length === 0) {
                    res.send('[]');
                }
                else {
                    res.json(products);
                }
                return [2 /*return*/];
        }
    });
}); });
app.get('/PopularModel', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, model;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = parseInt(req.query.page) || 0;
                limit = parseInt(req.query.limit) || 5;
                return [4 /*yield*/, ProductSave.collection('PopularModel')
                        .find()
                        .skip(page * limit)
                        .limit(limit)
                        .toArray()];
            case 1:
                model = _a.sent();
                if (model.length === 0) {
                    res.send(model);
                }
                else {
                    res.json(model);
                }
                return [2 /*return*/];
        }
    });
}); });
app.get('/review', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var review;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ProductSave.collection('review').find().toArray()];
            case 1:
                review = _a.sent();
                res.send(review);
                return [2 /*return*/];
        }
    });
}); });
app.get('/CategoryList', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var CategoryList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ProductSave.collection('Category-list').find().toArray()];
            case 1:
                CategoryList = _a.sent();
                res.send(CategoryList);
                return [2 /*return*/];
        }
    });
}); });
app.get('/Laptop', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var LapTopData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ProductSave.collection('LapTop').find().toArray()];
            case 1:
                LapTopData = _a.sent();
                res.send(LapTopData);
                return [2 /*return*/];
        }
    });
}); });
app.get('/search', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchType, allFindedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchType = req.query.q || '';
                return [4 /*yield*/, ProductSave.collection('AllTovar').find({
                        name: { $regex: searchType, $options: 'i' }
                    }).toArray()];
            case 1:
                allFindedData = _a.sent();
                res.send(allFindedData);
                return [2 /*return*/];
        }
    });
}); });
app.get('/adminpass', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getAdminPass;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ProductSave.collection('AdminPass').find().toArray()];
            case 1:
                getAdminPass = _a.sent();
                res.send(getAdminPass);
                return [2 /*return*/];
        }
    });
}); });
app.post('/addProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, collectionPopular, collectionAllTovar, collectionAdmin, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body) {
                    res.status(400).json({
                        error: 'Bad Request',
                        message: 'something wrong with body'
                    });
                    return [2 /*return*/];
                }
                body = req.body;
                if (!(typeof (body.img) === 'string' && typeof (body.name) === 'string' && typeof (body.cost) === 'string' && typeof (body.description) === 'object')) return [3 /*break*/, 7];
                return [4 /*yield*/, ProductSave.collection('PopularModel')];
            case 1:
                collectionPopular = _a.sent();
                return [4 /*yield*/, ProductSave.collection('AllTovar')];
            case 2:
                collectionAllTovar = _a.sent();
                return [4 /*yield*/, ProductSave.collection('AdminAdded')];
            case 3:
                collectionAdmin = _a.sent();
                return [4 /*yield*/, collectionPopular.insertOne(req.body)];
            case 4:
                result = _a.sent();
                return [4 /*yield*/, collectionAllTovar.insertOne(req.body)];
            case 5:
                _a.sent();
                return [4 /*yield*/, collectionAdmin.insertOne(req.body)];
            case 6:
                _a.sent();
                res.send(result);
                return [3 /*break*/, 8];
            case 7:
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'should to be 4 field, img,name,cost,description and all field string'
                });
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); });
app.delete('/DeleteProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, collectionPopular, collectionAllTovar, collectionAdmin, rightId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body.id) {
                    res.status(400).json({
                        error: 'Bad Request',
                        message: "You have to put id product"
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, ProductSave.collection('PopularModel')];
            case 1:
                collectionPopular = _a.sent();
                return [4 /*yield*/, ProductSave.collection('AllTovar')];
            case 2:
                collectionAllTovar = _a.sent();
                return [4 /*yield*/, ProductSave.collection("AdminAdded")];
            case 3:
                collectionAdmin = _a.sent();
                rightId = new mongodb_1.ObjectId(body.id);
                return [4 /*yield*/, collectionAllTovar.deleteOne({ _id: rightId })];
            case 4:
                _a.sent();
                return [4 /*yield*/, collectionPopular.deleteOne({ _id: rightId })];
            case 5:
                _a.sent();
                return [4 /*yield*/, collectionAdmin.deleteOne({ _id: rightId })];
            case 6:
                _a.sent();
                res.send({ status: "Everything okay" });
                return [2 /*return*/];
        }
    });
}); });
app.get('/adminTovar', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var collectionAdmin;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ProductSave.collection('AdminAdded').find().toArray()];
            case 1:
                collectionAdmin = _a.sent();
                collectionAdmin.insertOne();
                res.send(collectionAdmin);
                return [2 /*return*/];
        }
    });
}); });
// sharing bundle
// const indexPath = path.resolve(__dirname, "public/browser/index.html")
// app.use((req, res) => {
//     res.sendFile(indexPath)
// });
app.listen(PORT, function () {
    console.log("Server was started on port ".concat(PORT));
});
