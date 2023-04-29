const express = require("express");
const DoctorsTable = require("../models/AddingdrTB");
const checkAuthor = require("../middleware/checkAuthor");
const registerdt = require("../models/registrationtb");
const Token_datas = require("../models/TokenTB");
const token_booking = express.Router()





token_booking.post("/",async (req,res)=>{
    try {

       const data = await DoctorsTable.findById({_id:req.body._id})
        return res.status(200).json({
            Doctor:data,
            success:true,
            error:false,
            doctor_details:"loaded"
        })
        
    } catch (error) {
        console.log(error);
    }
})


 
  token_booking.post("/getting_datas",checkAuthor,async (req,res)=>{
try {
  const logindatas = await registerdt.find({login_id:req.userdata.loginid})
    const token_details = {
        patient:req.userdata.name,
        token_number:req.body.token_number,
        dr_id:req.body.dr_id,
        date_of_birth:logindatas[0].dob,
        email:logindatas[0].email,
        adress:logindatas[0].email,
        date_and_time:req.body.date_and_time,
    }
    const datas =  await Token_datas.find()
    console.log("datas==>",datas);

       Token_datas(token_details).save()
        return res.status(200).json({
            success:true,
            error:false,
            Token:datas,
            msg:"token booked"
        })
} catch (error) {
    console.log("datas==>",error); 
}
})







module.exports = token_booking ;