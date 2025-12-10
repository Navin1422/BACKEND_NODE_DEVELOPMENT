const express = require("express");
const cors = require(cors);
const database = require("./db-connect/db");
let port = 21000; 
const app = express();
database.connect();
app.use(
  cors({
    origin: "*",
    credientials: true,
  })
);
app.get("/details",(req,res) => {
    return{
    success : true,
    message: "Server is running Successfully",
    }
})
app.listen(port , async () => {
    console.log(`App is running on the port ${port}`);
})