import express from 'express'

const userRoutes = express.Router();

userRoutes.post('/addNewUser',(request,resp)=>{
    resp.json({
        "code":"120",
        "message":"User added successfully",
        "data":{}
    })
})

userRoutes.route('/userIdOperations/:id')
        .get((request,resp)=>{
             resp.json({
                "code":"120",
               "message":`User retrieved successfully for ${request.params.id}`,
                "data":{}
            })
        })
        .put((request,resp)=>{
            resp.json({
               "code":"120",
               "message":`User updated successfully for ${request.params.id}`,
               "data":{}
            })
        })
        .delete((request,resp)=>{
            resp.json({
               "code":"120",
               "message":`User deleted successfully for ${request.params.id}`,
               "data":{}
            })
        })
            


export default userRoutes