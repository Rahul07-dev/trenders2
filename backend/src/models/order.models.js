import mongoose, { Schema } from "mongoose";
import { commonStrings, orderStatus } from "../../constants";

const orderSchema = mongoose.Schema({
   customer: {
    type: Schema.Types.ObjectId,
    ref: commonStrings.CUSTOMER,
    required: true
   },
   products:[{
    product:{
        type:Schema.Types.ObjectId,
        ref: commonStrings.PRODUCT,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    }
   }],
    status:{
    type: String,
    enum: orderStatus,
    default: orderStatus.pending
   },
   createdAt:{
    type: Date,
    default: Date.now
   },
   updatedAt:{
    type:Date,
    default: Date.now
   }
},{timestamps:true});

export const Order= new mongoose.model(commonStrings.ORDER,orderSchema);