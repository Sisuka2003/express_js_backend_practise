import express from 'express'
import dotenv from 'dotenv'
import productRoute from './routes/products.js'
import userRoute from './routes/users.js'


const app =express();


app.use('/products',productRoute)
app.use('/users',userRoute)



app.listen(3000,()=>{
    console.log("hello world");
});