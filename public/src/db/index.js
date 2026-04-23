import mongoose from "mongoose";
import  {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
const connectionIntance = await mongoose.connect(`${process.env
            .MONGO_URI}/${DB_NAME}`, )
            console.log(`\n MongoDB connected !! DB HOST : $
                {connectionInstance.connection.host}`);
    } catch(error) {
        console.log("MONGODB connection error: ", error);
        process.exit(1);
    }// if db is not connected then server may crash api will not work  then the function  stop the server immediately
}

export default connectDB;