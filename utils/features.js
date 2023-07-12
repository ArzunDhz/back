

import jwt from "jsonwebtoken";
export const sendCookie = (user,res,message,statuscode=200)=>
{
    const token = jwt.sign({_id:user._id},'asdfad')

    res.status(statuscode).cookie('token',token, {
        httpOnly:true,
        maxAge:1000*60*15,
        sameSite:"none",
        secure:true
        
    }).json({
        success:true,
        message,
    })
}