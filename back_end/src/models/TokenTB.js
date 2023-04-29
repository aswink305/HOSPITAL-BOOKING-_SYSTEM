const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://aswin:aswinkasaas123@cluster0.d9sewu9.mongodb.net/HOSPITALBOOOKING?retryWrites=true&w=majority")


const schema = mongoose.Schema;


var Token_data = new schema({
        patient:String,
        token_number:String,
        dr_id:String,
        date_of_birth:String,
        email:String,
        adress:String,
        date_and_time:String,
})

const Token_datas = mongoose.model("Token_table", Token_data)

module.exports = Token_datas
