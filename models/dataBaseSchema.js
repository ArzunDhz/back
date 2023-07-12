import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    select: true,
    required: true,
  },

createdAt: {
    type: Date,
    default: Date.now
}

});
export const UserSchema = mongoose.model("UserTodo", userSchema);
