import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute';

const app = express();

app.use(bodyParser.json());

app.use('/api/user', userRouter);

app.listen(3001, () => console.log('Listening on port: 3001'));
