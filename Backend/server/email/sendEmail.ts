const express = require("express")
export const router = express.Router()
import { ObjectId } from "mongodb"
require('dotenv').config();

import { Resend } from "resend"

const resend = new Resend('re_63dDES8c_52AtjuaS1xrz1J3M4cicLnH4')

router.post('/sendEmail', (req, res) => {
    resend.emails.send({
        from:'kskiller2020@gmail.com',
        to:'kskiller2019@gmail.com',
        subject:'Hello',
        html:'<h1>Hi dude</h1>'
    })

})
