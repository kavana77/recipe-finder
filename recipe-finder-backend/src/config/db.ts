import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongoUri = process.env.MONGODB as string

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log('Connected to Database')
    } catch (error) {
        console.error("MongoDB connection error", error)
    }
}
export default connectDB