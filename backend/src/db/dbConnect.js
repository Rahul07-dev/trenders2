import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";


const connectDB =  async () => {
  try{
     const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}\${DB_NAME}`);
     console.log("MONGODB Connection Successful", connectionInstance.connection.host);
    //  console.log(`CONNECTION INSTANCE : `,connectionInstance);
  }
  catch(e)
  { 
    console.log(`Mongodb connection Failed, ${e}`);
    process.exit(1);
  }
} 

export default connectDB;