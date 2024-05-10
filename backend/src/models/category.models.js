import mongoose, {Schema} from "mongoose";
import { commonStrings } from "../../constants";

const categorySchema= new mongoose.Schema({
   name:{
    type:String,
    required: true,
    unique: true,
   },
   parent: {
    type: Schema.Types.ObjectId,
    ref: commonStrings.CATEGORY
   },
   children: {
    type:[{
        type: Schema.Types.ObjectId,
        ref: commonStrings.CATEGORY
    }]
   }

});


export const Category= new mongoose.model(commonStrings.CATEGORY,categorySchema);