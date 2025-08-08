import dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';

const stage = process.env.Stage || 'local';
const envFilePath = `stage.${stage}.env`

if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
} else {
    console.warn(`Environment file ${envFilePath} not found. Using default environment variables.`);
}

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req: any, res: any) => {
    res.send('building')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});