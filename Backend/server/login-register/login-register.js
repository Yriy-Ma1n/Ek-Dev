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
var server_1 = require("../../server");
var express = require("express");
var passwordHash = require("password-hash");
exports.router = express.Router();
var cors = require("cors");
exports.router.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
exports.router.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name, password, profileImg, cardItem, OrderHistory, userCollection, finded, findedEmail, hashedPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, name = _a.name, password = _a.password, profileImg = _a.profileImg, cardItem = _a.cardItem, OrderHistory = _a.OrderHistory;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userCollection = _b.sent();
                return [4 /*yield*/, userCollection.findOne({ name: name })];
            case 2:
                finded = _b.sent();
                return [4 /*yield*/, userCollection.findOne({ email: email })];
            case 3:
                findedEmail = _b.sent();
                if (finded) {
                    res.status(403).json({ error: "login already exist" });
                }
                else if (findedEmail) {
                    res.status(403).json({ error: "email already exist" });
                }
                else {
                    hashedPassword = passwordHash.generate(password);
                    userCollection.insertOne({ email: email, name: name, password: hashedPassword, profileImg: profileImg, cardItem: cardItem, OrderHistory: OrderHistory });
                    res.status(200).json({ okay: true });
                }
                return [2 /*return*/];
        }
    });
}); });
exports.router.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, userCollection, finded, areSame;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, password = _a.password;
                return [4 /*yield*/, server_1.userSave.collection("Users")];
            case 1:
                userCollection = _b.sent();
                return [4 /*yield*/, userCollection.findOne({ name: name })];
            case 2:
                finded = _b.sent();
                if (finded) {
                    areSame = passwordHash.verify(password, finded.password);
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
exports.router.delete('/logout', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        req.session.destroy(function (err) {
            if (err) {
                return res.status(500).send({ message: 'err' });
            }
            res.clearCookie('user-session', {
                path: '/'
            });
            res.send({ message: 'Logout1' });
        });
        return [2 /*return*/];
    });
}); });
