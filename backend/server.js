import express from 'express';
import productRoutes from './routes/productRoutes.js';

import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
connectDB();

import { errorHandler, notFount } from './middleware/errorMiddleware.js';

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('API is running ..');
});

app.use('/api/products', productRoutes);

app.use(notFount);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
