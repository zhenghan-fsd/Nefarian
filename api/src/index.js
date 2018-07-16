import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';

const app = express();

mongoose.connect('mongodb://localhost/nefarian');

app.use(bodyParser.json());

app.use('/api/user', userRouter);

app.listen(3001, () => console.log('Listening on port: 3001'));
