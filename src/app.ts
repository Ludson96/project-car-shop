import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRouter from './Routes/CarRoute';

const app = express();
app.use(express.json());

app.use('/cars', CarRouter);

app.use(ErrorHandler.handle);

export default app;
