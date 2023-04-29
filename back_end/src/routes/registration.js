const express = require("express")
const bcrypt = require('bcrypt');
const registerdt = require("../models/registrationtb");
const logindt = require("../models/loginTB");

var register = express.Router()

register.post("/", async (req, res) => {
   try {

   } catch (error) {
      return res.status(400).json({
         success: false,
         error: true,
         msg: "error"
      })
   }
   var user = await registerdt.findOne({ name: req.body.name })
   console.log("ssss====>", user);
   if (user) {
      return res.status(400).json({
         success: false,
         error: true,
         msg: "already registered this name"
      })
   }
   var email = await registerdt.findOne({ email: req.body.email })
   if (email) {
      return res.status(400).json({
         success: false,
         error: true,
         msg: "already registered this email"
      })
   }
   if (req.body.password !== req.body.repassword) {
      return res.status(400).json({
         success: false,
         error: true,
         msg: "Repassword error"
      })
   }


   var hashedpass = await bcrypt.hash(req.body.password, 10)
   console.log("passs===>", hashedpass);
   if (hashedpass) {

      const logindata = {
         name: req.body.name,
         password: hashedpass,
      }
      logindt(logindata).save().then((datas) => {
         console.log("savedata=====>", datas)
         const regitrationdatas = {
            login_id: datas._id,
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            adress: req.body.address,
            password: req.body.password,
            repassword: req.body.repassword
         }
         registerdt(regitrationdatas).save().then((daatas) => {
            console.log("savedata=====>", daatas)
            return res.status(200).json({
               datas: daatas,
               error: false,
               success: true
            })
         })

      })

   }


})

module.exports = register 