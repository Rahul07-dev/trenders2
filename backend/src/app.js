import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"})); // for setting data configuration type.
app.use(express.urlencoded({extended:true, limit: "16kb"})); // with extended you can use nested objects.
app.use(express.static("public")); //storing files and folders : images,fevicon etc.
app.use(cookieParser()); //allow crud operations on cookies.

export default app; 