import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI as string;

const connectDB = async () => {
  try {
    if (!mongoUri) {
      throw new Error("MongoDB URI not defined in environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to Database");
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
};

export default connectDB;
