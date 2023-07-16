import jwt from 'jsonwebtoken'

export const sendUserSessionCookie =(user,res,message,statuscode=200)=>
{
   const token = jwt.sign({_id:user._id},process.env.JWT_URL)  //making the token out of user id and assiging a key to verity that token

   res.status(statuscode).cookie('token',token,{
    maxAge: new Date(Date.now()+900000),
    secure: process.env.NODE_ENV === 'development' ? false : true,
    httpOnly: process.env.NODE_ENV === 'development' ? false : true,
    sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
   }).json({
    user,
    success:true,
    message
   })

}