const express = require ("express")
const multer = require("multer")
 const imagegetting = express.Router()

 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../../../front_end/token_booking/public/Images/")
    },
    filename: function (req, file, cb) {
        cb(null, req.body.file)

    }

  })
  var upload = multer({ storage: storage })

imagegetting.post("/",upload.single("file"),(req,res)=>{
    console.log("re===>",req.body.file);
return res.status(200).json({
    success:true,
    error:false,
    msg:"Getting image", 
})
})



 module.exports = imagegetting ;