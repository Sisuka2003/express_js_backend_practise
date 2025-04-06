import express from 'express'
import dotenv from 'dotenv'
import productRoute from './routes/products.js'
import userRoute from './routes/users.js'
import userLogger from './middleware/usersMiddleware.js'
dotenv.config()


const app =express();
app.use(userLogger) //calling a middleware globally

app.use('/products',productRoute)
app.use('/users',userRoute)

app.listen(3000,()=>{
    console.log("hello world");
});