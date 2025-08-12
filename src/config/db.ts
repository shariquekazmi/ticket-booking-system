import mongoose from "mongoose";
import dotenv from 'dotenv';

export const connectToDatabase = async () => {
    //setting up path for env based on environment
    dotenv.config({ path: `stage.${process.env.STAGE}.env` });
    const dbUrl = process.env.MONGO_URI as string;
    console.log('Connecting to database at:', dbUrl);
    try {
        await mongoose.connect(dbUrl);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}