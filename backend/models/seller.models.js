import mongoose from "mongoose";
import { userSchema } from "./user.models";
import { commonStrings } from "../constants";

const sellerSchema= userSchema.extend({
  storeName:{
    type:String,
    requred:true,
  },
  storeDescription:{
    type:String,
  },
  storeLogo:String,
  businessInfo:{
    businessAddress: String
  },
  paymentInfo: {
   bankAccount: String,
   UPI: String,
  }
});


export const Seller = mongoose.model(commonStrings.SELLER,sellerSchema);