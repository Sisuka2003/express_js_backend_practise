function productMiddleWare1(req,resp,next){
    console.log("product middleware1 invoked....");
    if(req.query.name == 'apple'){
        resp.name = 'apple'
    }
    next();
    return
}
function productMiddleWare2(req,resp,next){
    console.log("product middleware2 invoked....");
    next();
    return
}


export {productMiddleWare1,productMiddleWare2};