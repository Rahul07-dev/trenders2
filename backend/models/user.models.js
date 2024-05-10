import mongoose from "mongoose";
import { commonStrings } from "../constants";
//mongoose is for data modelling

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
    },
    email :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password: {
        type:String,
        required:[true, "password is required"], // an error message too
    },
    profilePic: {
        type:String
    }
},{timestamps:true});

 const User=mongoose.model(commonStrings.USER,userSchema);

 export {User,userSchema};
