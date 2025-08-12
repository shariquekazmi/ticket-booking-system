import dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';
import { connectToDatabase } from './config/db';
import { time } from 'console';

//setting up path for env based on environment
dotenv.config({ path: `stage.${process.env.STAGE}.env` });

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req: any, res: any) => {
    res.send({message: 'Building', time: new Date().toLocaleString()});
})

// Connecting to the database
connectToDatabase()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});