const mongoose = require ("mongoose")


mongoose.connect("mongodb+srv://aswin:aswinkasaas123@cluster0.d9sewu9.mongodb.net/HOSPITALBOOOKING?retryWrites=true&w=majority")


const schema = mongoose.Schema ;


var logindata = new schema ({
    name :String,
    password:String,
})
const logindt = mongoose.model("Lgintb",logindata)

module.exports = logindt
