import mongoose, { Schema } from "mongoose";
import { commonStrings } from "../constants";

const reviewSchema= new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: commonStrings.PRODUCT,
        required: true
    },
    customer : {
       type: Schema.Types.ObjectId,
       ref: commonStrings.CUSTOMER,
       required: true
    },
    rating: {
        type: Number,
        required: true,
        min:1,
        max:5
    },
    comment: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true});

export const Review= new mongoose.model(commonStrings.REVIEW, reviewSchema);