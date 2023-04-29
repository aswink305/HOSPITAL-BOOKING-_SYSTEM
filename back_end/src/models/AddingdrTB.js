const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://aswin:aswinkasaas123@cluster0.d9sewu9.mongodb.net/HOSPITALBOOOKING?retryWrites=true&w=majority")


const schema = mongoose.Schema;


var DrsTable = new schema({
    name: String,
    address: String,
    pic: String,
    qualification: String,
    categorie: String
})

const DoctorsTable = mongoose.model("DrsTable", DrsTable)

module.exports = DoctorsTable
