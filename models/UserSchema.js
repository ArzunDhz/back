import mongoose from "mongoose"


const userSchema =  new mongoose.Schema({
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
        select: false,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

})
/* here we need to export the schema that hold all 
the value of the database into controller
inorder to access and manipulate the database
*/
export const UserSchema = mongoose.model('UserTodo',userSchema ) 
