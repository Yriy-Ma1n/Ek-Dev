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
var server_1 = require("../../../server");
var express = require("express");
exports.router = express.Router();
exports.router.get('/products', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = parseInt(req.query.page) || 0;
                limit = parseInt(req.query.limit) || 5;
                return [4 /*yield*/, server_1.ProductSave.collection('Product')
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
exports.router.get('/PopularModel', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, model;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = parseInt(req.query.page) || 0;
                limit = parseInt(req.query.limit) || 5;
                return [4 /*yield*/, server_1.ProductSave.collection('PopularModel')
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
exports.router.get('/review', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var review;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.ProductSave.collection('review').find().toArray()];
            case 1:
                review = _a.sent();
                res.send(review);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get('/CategoryList', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var CategoryList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.ProductSave.collection('Category-list').find().toArray()];
            case 1:
                CategoryList = _a.sent();
                res.send(CategoryList);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get('/search', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchType, allFindedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchType = req.query.q || '';
                return [4 /*yield*/, server_1.ProductSave.collection('AllTovar').find({
                        name: { $regex: searchType, $options: 'i' }
                    }).toArray()];
            case 1:
                allFindedData = _a.sent();
                res.send(allFindedData);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get('/adminpass', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getAdminPass;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.ProductSave.collection('AdminPass').find().toArray()];
            case 1:
                getAdminPass = _a.sent();
                res.send(getAdminPass);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get('/adminTovar', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var collectionAdmin;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.ProductSave.collection('AdminAdded').find().toArray()];
            case 1:
                collectionAdmin = _a.sent();
                res.send(collectionAdmin);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get('/userInAccount', function (req, res) {
    console.log(req.session);
    if (req.session.isAuthenticated) {
        res.send(req.session.user);
        return;
    }
    res.send({ userInAccount: false });
});
