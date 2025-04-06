import express from 'express'
import {productMiddleWare1,productMiddleWare2} from '../middleware/productMiddleware.js';
const productRoute =express.Router()


productRoute.get("/getAllProducts",
    productMiddleWare2,
    (request,resp)=>{ //makes the middleware unique to the specific function
    try{
        resp.json({
            code :"120",
            message :"All products received",
            data:{}
        });
    }catch(err){
        resp.status(500).send("Failed product receiver");
    }
})


productRoute.get("/getSingleProducts/:id",(request,resp)=>{
    try{
        resp.json({
            code :"120",
            message :`single product received${request.params.id}`,
            data:{}
        });
    }catch(err){
        resp.status(500).send("single product receive failed");
    }
})

productRoute.get('/getProductById',
    productMiddleWare1,(request,resp)=>{ //makes the middleware unique to the specific function
    resp.json({
        "code":"120",
        "message":`product retrieved successfully for  the name of ${resp.name}`,
        "data":{}
    })
})

export default productRoute;