
import { UserSchema } from "../models/dataBaseSchema.js";
import jwt  from "jsonwebtoken";

export const isAuthencated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.json({ success: false, message: "Login First " });
  const decodedToken = jwt.verify(token, "asdfad");
  req.user  =  await UserSchema.findById(decodedToken._id);
  next()
};
