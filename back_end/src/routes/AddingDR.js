const express = require("express");
const multer = require("multer");

const DoctorsTable = require("../models/AddingdrTB");
const { find } = require("../models/loginTB");
var addingdrs = express.Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../public/images/")
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name)

    }

})
var upload = multer({ storage: storage })
addingdrs.post("/", (req, res) => {
    const Drdetails = {
        name: req.body.name,
        address: req.body.address,
        pic: req.body.image,
        qualification: req.body.qualification,
        categorie: req.body.categorie
    }

  const drtable =  DoctorsTable(Drdetails).save()

  
})

addingdrs.post("/imagegetting", upload.single("file"), (req, res) => {
    return res.status(200).json({
        success: true,
        error: false,
        msg: "Getting image",


    })
})
addingdrs.post("/availableDr", async (req, res) => {


    try {
const Cardiology = await DoctorsTable.find({categorie:"Cardiology"})
const Neurology = await DoctorsTable.find({categorie:"Neurology"})
const Dental = await DoctorsTable.find({categorie:"Dental"})
const Diagnostic = await DoctorsTable.find({categorie:"Diagnostic"})
console.log("data",Neurology );

        return res.status(200).json({
            Cardiology: Cardiology,
            Dental: Dental,
            Diagnostic: Diagnostic,
            Neurology: Neurology,
            success: true,
            error: false,
        })
    } catch (error) {
        console.log("error===>", error);
    }



})




module.exports = addingdrs