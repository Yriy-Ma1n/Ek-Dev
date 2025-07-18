"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
exports.router = express.Router();
require('dotenv').config();
var resend_1 = require("resend");
var resend = new resend_1.Resend('re_63dDES8c_52AtjuaS1xrz1J3M4cicLnH4');
exports.router.post('/sendEmail', function (req, res) {
    resend.emails.send({
        from: 'kskiller2020@gmail.com',
        to: 'kskiller2019@gmail.com',
        subject: 'Hello',
        html: '<h1>Hi dude</h1>'
    });
});
