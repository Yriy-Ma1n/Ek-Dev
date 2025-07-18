const express = require("express")
export const router = express.Router()
import { ObjectId } from "mongodb"
require('dotenv').config();

import { Resend } from "resend"

const resend = new Resend(process.env.emailId)

router.post('/sendEmail', (req, res) => {
    resend.emails.send({
        from:'ekatalogmini.com',
        to:'kskiller2019@gmail.com',
        subject:'Hello',
        html:'<h1>Hi dude</h1>'
    }).then(res=>console.log(res)).catch(err=>console.log(err))

    res.send({message:'okay'})

})
