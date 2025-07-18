"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
exports.router = express.Router();
require('dotenv').config();
var resend_1 = require("resend");
var resend = new resend_1.Resend(process.env.emailId);
exports.router.post('/sendEmail', function (req, res) {
    resend.emails.send({
        from: 'ekatalogmini.com',
        to: 'kskiller2019@gmail.com',
        subject: 'Hello',
        html: '<h1>Hi dude</h1>'
    }).then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
    res.send({ message: 'okay' });
});
