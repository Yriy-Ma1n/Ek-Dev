"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var passwordHash = require("password-hash");
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
exports.router.post('/addCommentToProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, date, image, message, tovarId, findedCollection, idLikeObjId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, date = _a.date, image = _a.image, message = _a.message, tovarId = _a.tovarId;
                return [4 /*yield*/, server_1.ProductSave.collection("AllTovar")];
            case 1:
                findedCollection = _b.sent();
                idLikeObjId = new mongodb_1.ObjectId(tovarId);
                findedCollection.updateOne({ _id: idLikeObjId }, { $push: { comments: { name: name, date: date, image: image, message: message } } });
                res.send({ okay: true });
                return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/changeUserName', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, id, userColletion, trytofind;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = req.body.username;
                id = new mongodb_1.ObjectId(req.session.user._id);
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userColletion = _a.sent();
                return [4 /*yield*/, userColletion.findOne({ name: username })];
            case 2:
                trytofind = _a.sent();
                if (trytofind) {
                    res.send({ message: 'Імя користувача зайнято' });
                }
                else {
                    userColletion.updateOne({ _id: id }, { $set: { name: username } });
                    res.send({ sended: true });
                }
                return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/changePassword', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, oldPassword, newPassword, areSame, id, userColletion, hashedPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                areSame = passwordHash.verify(oldPassword, req.session.user.password);
                id = new mongodb_1.ObjectId(req.session.user._id);
                if (!areSame) return [3 /*break*/, 2];
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userColletion = _b.sent();
                hashedPassword = passwordHash.generate(newPassword);
                userColletion.updateOne({ _id: id }, { $set: { password: hashedPassword } });
                res.send({ success: true });
                return [3 /*break*/, 3];
            case 2:
                res.send({ message: "Паролі не збігаються" });
                _b.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/productQuantityPlus', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ItemId, userColletion, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ItemId = req.body.ItemId;
                if (!ItemId) {
                    res.status(404).json({ error: "Item not found" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userColletion = _a.sent();
                id = req.session.user._id;
                userColletion.updateOne({ _id: new mongodb_1.ObjectId(id), "cardItem._Itemid": ItemId }, { $inc: { "cardItem.$.quantity": 1 } });
                res.status(200).json({ message: "Item quantity was updated" });
                return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/productQuantityMinus', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ItemId, userColletion, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ItemId = req.body.ItemId;
                if (!ItemId) {
                    res.status(404).json({ error: "Item not found" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userColletion = _a.sent();
                id = req.session.user._id;
                userColletion.updateOne({ _id: new mongodb_1.ObjectId(id), "cardItem._Itemid": ItemId }, { $inc: { "cardItem.$.quantity": -1 } });
                res.status(200).json({ message: "Item quantity was updated" });
                return [2 /*return*/];
        }
    });
}); });
exports.router.post('/addLastOrder', function (req, res) {
    var id = req.session.user._id;
    var _a = req.body, item = _a.item, orderId = _a.orderId, date = _a.date;
    console.log(orderId);
    if (item) {
        var userData_1 = server_1.userSave.collection("Users");
        item.forEach(function (data) {
            userData_1.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $push: { OrderHistory: __assign(__assign({ orderId: orderId }, data), { date: date }) } });
        });
        res.send({ message: 'tovar was added to last order' });
    }
    else {
        res.status(404).json({ error: 'item not found' });
    }
});
