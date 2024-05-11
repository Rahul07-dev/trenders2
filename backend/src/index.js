import dotenv from "dotenv";
import express from "express"
import connectDB from "./db/dbConnect.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})

connectDB().then(()=>{
     app.listen(process.env.PORT || 8000,()=>{
        console.log("App is running on PORT ",process.env.PORT);
     })
   }
).catch((error)=>{
    console.log("Mongodb connection failed !!!",error);
});