const express = require("express");
const DoctorsTable = require("../models/AddingdrTB");
const token_booking = express.Router()





token_booking.post("/",async (req,res)=>{
    try {

       const data = await DoctorsTable.findById({_id:req.body._id})
        console.log("body_responce=====>",data);
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







module.exports = token_booking ;