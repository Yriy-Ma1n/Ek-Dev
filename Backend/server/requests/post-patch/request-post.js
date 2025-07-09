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
exports.router = void 0;
var express = require("express");
var mongodb_1 = require("mongodb");
var server_1 = require("../../../server");
exports.router = express.Router();
exports.router.post('/addProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, collectionPopular, collectionAllTovar, collectionAdmin;
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
                if (!server_1.ProductSave) {
                    res.status(500).json({
                        error: 'Internal Server Error',
                        message: 'Database connection not established'
                    });
                    return [2 /*return*/];
                }
                body = req.body;
                if (!(typeof (body.img) === 'string' && typeof (body.name) === 'string' && typeof (body.cost) === 'string' && typeof (body.description) === 'object')) return [3 /*break*/, 4];
                collectionPopular = server_1.ProductSave.collection('PopularModel');
                collectionAllTovar = server_1.ProductSave.collection('AllTovar');
                collectionAdmin = server_1.ProductSave.collection('AdminAdded');
                return [4 /*yield*/, collectionPopular.insertOne(req.body)];
            case 1:
                _a.sent();
                return [4 /*yield*/, collectionAllTovar.insertOne(req.body)];
            case 2:
                _a.sent();
                return [4 /*yield*/, collectionAdmin.insertOne(req.body)];
            case 3:
                _a.sent();
                res.send({ succes: true });
                return [3 /*break*/, 5];
            case 4:
                res.status(400).json({
                    error: 'Bad Request',
                    message: 'should to be 4 field, img,name,cost,description and all field string'
                });
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/changeProfileAvatar', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var URL, id, userDataBase, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                URL = req.body.URL;
                id = req.session.user._id;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userDataBase = _a.sent();
                return [4 /*yield*/, userDataBase.findOne({ _id: new mongodb_1.ObjectId(id) })];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, userDataBase.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { profileImg: URL } })];
            case 3:
                _a.sent();
                res.send({ status: 'Your avatar image was changed' });
                return [3 /*break*/, 5];
            case 4:
                res.status(400).send({ error: 'User not found' });
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/addItemToCard', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item, id, Finduser, idLikeObj, user, userHasItem, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                item = req.body.item;
                id = req.session.user._id;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                Finduser = _a.sent();
                idLikeObj = new mongodb_1.ObjectId(id);
                if (!mongodb_1.ObjectId.isValid(idLikeObj))
                    res.status(403).json({ error: 'UserId Invalid' });
                return [4 /*yield*/, Finduser.findOne({ _id: idLikeObj })];
            case 2:
                user = _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 9, , 10]);
                return [4 /*yield*/, Finduser.findOne({
                        _id: idLikeObj,
                        "cardItem._Itemid": item._Itemid
                    })];
            case 4:
                userHasItem = _a.sent();
                if (!userHasItem) return [3 /*break*/, 6];
                return [4 /*yield*/, Finduser.updateOne({ _id: idLikeObj, "cardItem._Itemid": item._Itemid }, { $inc: { "cardItem.$.quantity": 1 } })];
            case 5:
                _a.sent();
                res.send({ message: 'quantity was updated' });
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, Finduser.updateOne({ _id: idLikeObj }, { $push: { cardItem: item } })];
            case 7:
                _a.sent();
                res.send({ status: 'Item was added' });
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: 'Server error' });
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/removeItemFromCard', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, id, Finduser, idLikeObj, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemId = req.body.itemId;
                id = req.session.user._id;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                Finduser = _a.sent();
                idLikeObj = new mongodb_1.ObjectId(id);
                if (!mongodb_1.ObjectId.isValid(idLikeObj))
                    res.status(403).json({ error: 'UserId Invalid' });
                return [4 /*yield*/, Finduser.findOne({ _id: idLikeObj })];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, Finduser.updateOne({ _id: idLikeObj }, { $pull: { cardItem: { _Itemid: itemId } } })];
            case 3:
                _a.sent();
                res.send({ status: 'Item was added' });
                return [3 /*break*/, 5];
            case 4:
                res.status(400).send({ error: 'error' });
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/deleteItemFromCard', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemName, id, Finduser, idLikeObj, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemName = req.body.itemName;
                id = req.session.user._id;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                Finduser = _a.sent();
                idLikeObj = new mongodb_1.ObjectId(id);
                return [4 /*yield*/, Finduser.findOne({ _id: idLikeObj })];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, Finduser.updateOne({ _id: idLikeObj }, { $pull: { cardItem: { name: itemName } } })];
            case 3:
                _a.sent();
                res.send({ data: 'everything okay' });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ error: "something went wrong" });
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.delete('/clearCard', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, Finduser, idLikeObj, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.session.user._id;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                Finduser = _a.sent();
                idLikeObj = new mongodb_1.ObjectId(id);
                return [4 /*yield*/, Finduser.findOne({ _id: idLikeObj })];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, Finduser.updateOne({ _id: idLikeObj }, { $set: { cardItem: [] } })];
            case 3:
                _a.sent();
                res.send({ message: 'Your card was clear' });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
