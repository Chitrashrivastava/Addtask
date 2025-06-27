const mongoose = require("mongoose")
const  connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("DB CONNECTED")
        
    } catch (error) {
        console.log("error in connecting")
    }
}
module.exports  = connectDb