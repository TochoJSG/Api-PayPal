import express from 'express';
import paymentRoutes from './routes/payments.routes.js';
import { PORT } from './config.js'

const app = express();

//paymentRoutes   router

app.use( paymentRoutes );

app.listen( PORT );

console.log('Server on Port', PORT );