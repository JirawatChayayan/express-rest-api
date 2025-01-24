import mongoose from "mongoose"
import dotenv from "dotenv"


// dotenv.config({path:`${process.cwd()}/.env`})
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error : ",error);
        process.exit(1);
    }
};

export default connectDB;