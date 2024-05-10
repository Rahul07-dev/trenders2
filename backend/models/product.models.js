import mongoose,{Schema} from "mongoose";
import { commonStrings } from "../constants";

const productSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    description: {type:String},
    price: {
        type:Number,
        required: true,
        min:0
    },
    brand :{type: String},
    imageURL: {type:String},
    stockQuantity:{
        type: Number,
        default:0
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:commonStrings.CATEGORY,
        required:true
    },
    reviews:[{
        type: Schema.Types.ObjectId,
        ref:commonStrings.REVIEW
    }]

},{timestamps:true});

export const Product=mongoose.model(commonStrings.PRODUCT,productSchema);