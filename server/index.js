const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const stripeRouter = require('./routes/stripe');

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());

app.use('/auth',authRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/carts',cartRouter);
app.use('/orders',orderRouter);
app.use('/checjout',stripeRouter);



mongoose.connect(process.env.MONGODB_CONNECTION,(err)=>{
    console.log('connected to mongoDB sucsessfully')
})


app.listen(process.env.PORT,(err)=>{
    console.log('server is running on port '+process.env.PORT);
})