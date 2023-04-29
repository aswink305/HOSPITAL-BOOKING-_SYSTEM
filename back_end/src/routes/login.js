const express = require("express");
const logindt = require("../models/loginTB");
const loginRoute = express.Router()
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

loginRoute.post("/", async (req, res) => {
    try {
        const user = await logindt.findOne({ name: req.body.name })
        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                msg: "user not found"

            })
        }

        const hashed = await bcrypt.compare(req.body.password, user.password);

        console.log("hashed===>",hashed);

        if (hashed) {

            const token = jwt.sign(
                {
                    loginid: user._id,
                    name: user.name
                },
                "scrtvw",
                { expiresIn: "1h" }
            )

            if(user.name=="admin"){
        console.log("hiiii iam admin",user.name);
        return res.status(200).json({
            loginDT:token,
            success: true,
            error: false,
            msg: "i am admin"
        })

            }else{
        console.log("hiiii iam user",user.name);

                return res.status(200).json({
                    loginDT:token,
                    success: true,
                    error: false,
                    msg: "this is user"
        })

            }
            


        } else {
            return res.status(400).json({
                success: false,
                error: true,
                msg: "password hashing error"

            })
        }
    } catch (error) {
        console.log(error);
    }


})
















module.exports = loginRoute