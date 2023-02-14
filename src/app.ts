import express from 'express';
import CarRouter from './Routes/CarRoute';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());

app.use('/cars', CarRouter);

app.use(ErrorHandler.execute);

export default app;
