const mongoose = require("mongoose");
exports.connect = async() => {
    try{
        await mongoose.connect("mongodb+srv://navinzoro7_db_user:HeVN2S5L2hhbNDy2@cluster0.h40sb6k.mongodb.net/Backend-Cluster-1");
        console.log("Database Connected Successfully");
    }
    catch(e){
        console.log("Error in Connecting to the DB")
    }   
}