import express from 'express'
const productRoute =express.Router()


productRoute.get("/getAllProducts",(request,resp)=>{
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


productRoute.get("/getSingleProducts",(request,resp)=>{
    try{
        resp.json({
            code :"120",
            message :"single product received",
            data:{}
        });
    }catch(err){
        resp.status(500).send("single product receive failed");
    }
})

productRoute.get('/getProductById/:id',(request,resp)=>{
    resp.json({
        "code":"120",
        "message":"User retrieved successfully for"+request.params.id,
        "data":{}
    })
})

export default productRoute;