const mongoose = require ("mongoose")


mongoose.connect("mongodb+srv://aswin:aswinkasaas123@cluster0.d9sewu9.mongodb.net/HOSPITALBOOOKING?retryWrites=true&w=majority")


const schema = mongoose.Schema ;


var registerdatas = new schema ({
    login_id:{type:mongoose.Types.ObjectId, ref:"logintb"},
    name :{type:String},
    email:{type:String},
    dob:{type:String},
    adress:{type:String},
    password:{type:String},
    repassword:{type:String}
})

const registerdt = mongoose.model("registerTB",registerdatas)

module.exports = registerdt
