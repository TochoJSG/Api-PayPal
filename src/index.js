import express from 'express';
import paymentRoutes from './routes/payments.routes.js';
import { PORT } from './config.js'
import path from 'path';

const app = express();

//paymentRoutes   router

app.use( paymentRoutes );

app.use(express.static(path.resolve('src/public') ) );

app.listen( PORT );

console.log('Server on Port', PORT );