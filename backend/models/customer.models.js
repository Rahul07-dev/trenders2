import mongoose from "mongoose";
import { userSchema } from "./user.models";
import { commonStrings } from "../constants";

const customerSchema= userSchema.extend({
    shippingAddress: [{type:string,
          required:true
    }],
    paymentMethods:[{
        type:String,
        required:true
    }],
    wishlist:[{
        type: Schema.Types.ObjectId,
        ref: commonStrings.PRODUCT
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref:commonStrings.ORDER
    }]
})

export const Customer= new mongoose.model(commonStrings.CUSTOMER,customerSchema);
