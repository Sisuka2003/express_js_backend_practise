//Logics are written using middleware

function userLogger(req,resp,next){   
    console.log(`${req.originalUrl} -> received for userLogger middleware`);
    next()
}


export default userLogger;