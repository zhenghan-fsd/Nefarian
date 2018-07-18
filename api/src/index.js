import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

mongoose.connect('mongodb://localhost/nefarian');

app.use(bodyParser.json());

app.use('/api/user', userRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port: ${port}`));
