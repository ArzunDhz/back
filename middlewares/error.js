
import { app } from "../app"

export const errorMiddleWare = ()=>{
    app.use((err,req,res,next)=>{
        return res.status(404).send({
          success:false,
          message:err.message
         })  
     })

}  
