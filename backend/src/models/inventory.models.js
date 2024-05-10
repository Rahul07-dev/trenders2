import mongoose, { Schema } from "mongoose";
import { commonStrings } from "../../constants";

const inventorySchema= mongoose.Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: commonStrings.PRODUCT,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    lastUpdated:{
        type: Date,
        default: Date.now
    }
},{timestamps: true});

export const Inventory= new mongoose.model(commonStrings.Inventory,inventorySchema);