const mongoose = require("mongoose");
exports.connect = async() => {
    try{
        await mongoose.connect("Connect-DB");
        console.log("Database Connected Successfully");
    }
    catch(e){
        console.log("Error in Connecting to the DB")
    }   
}
