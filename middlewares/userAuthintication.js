
import  jwt from "jsonwebtoken";
import { UserSchema } from "../models/UserSchema.js";

export const userAuthenication = async (req,res,next)=>{
 const {token} = req.cookies                // we can only access the cookie  after  using the cookie parser in app
 if(!token) return res.status(400).json({success:false, message:"Not logged In "})
   const decodedToken = jwt.verify(token, process.env.JWT_URL)
   req.userData= await UserSchema.findById(decodedToken._id) 
   next()
}