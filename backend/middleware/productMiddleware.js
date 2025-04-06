function productMiddleWare(req,resp,next){
    console.log("product middleware invoked....");
    next();
}


export default productMiddleWare;