import { UserSchema } from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import { sendUserSessionCookie } from "../utils/userSessionCookie.js";
import ErrorHandler from "../middlewares/errorHandeler.js";

export const registerNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await UserSchema.findOne({ email });
    if (user) return next(new ErrorHandler("User Already Exists", 400));
    const hashedpassword = await bcrypt.hash(password, 10); //we hash the password with level of secrity ie 10 in this case
    user = await UserSchema.create({
      name,
      email,
      password: hashedpassword,
    });
    res.status(201).json({ success: true, message: "User Registered", user });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return next(new ErrorHandler("Invalid  Password", 400));

    sendUserSessionCookie(user, res, `Welcome back, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};
export const getUserInfo = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: req.userData,
  
    });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const { deleteUser } = req.params;
    const user = await UserSchema.findOne(deleteUser);
    if (!user) return next(new ErrorHandler("User ID not Found", 400));
    user.deleteOne();
    res.cookie("token", "", {
        expires: new Date(Date.now()),
        secure: process.env.NODE_ENV === 'development' ? false : true,
    httpOnly: process.env.NODE_ENV === 'development' ? false : true,
    sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
      })
      .status(200)
      .json({ success: true, message: "User Deleted" });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res
      .cookie("token", "", {
        expires: new Date(Date.now()),
        secure: process.env.NODE_ENV === 'development' ? false : true,
        httpOnly: process.env.NODE_ENV === 'development' ? false : true,
        sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
      })
      .json({
        success: true,
        message: "LoggedOut",
      });
  } catch (error) {
    next(error);
  }
};
