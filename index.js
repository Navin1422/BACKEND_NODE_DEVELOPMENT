const express = require("express");
const cors = require(cors);
let port = 21000; // we can specify our own port in node js
const app = express();
app.get("/details",(req,res) => {
    return{
    success : true,
    message: "Server is running Successfully",
    }
})
app.listen(port , async () => {
    console.log(`App is running on the port ${port}`);
})