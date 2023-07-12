import { UserSchema } from "../models/dataBaseSchema.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const registerNewUser = async (req, res) => {
 try {
  const { name, email, password } = req.body;
  let user = await UserSchema.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User alearday exist ",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await UserSchema.create({
    name,
    email,
    password: hashedPassword,
  });
  sendCookie(user, res, "Successfully registered", 201);
 } catch (error) {
  next(error)
 }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "Invalid Email or Password " });
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return res.json({ success: false, message: " Passowrd is Incorrect " });
  
    sendCookie(user, res, `Successfully logged in ${user.name}`, 200);
  } catch (error) {
    next(error)
  }
};

export const allUserDetails = async (req, res) => {
  const user = await UserSchema.find({});
  res.json({
    user,
  });
};

export const getMyProflie = async (req, res) => {
  res.json({
    user: req.user,
  });
};
export const logout = (req, res) => {


    res.status(200).cookie
    ("token","",
    {
      expires: new Date(Date.now()),
      sameSite:"none",
      secure:true
    }).json({

        
    })
};
