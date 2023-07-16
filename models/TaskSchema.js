

import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,  // this is select the object id from the referenced userSchema 
        ref:'UserTodo', //reference to the usermodel schema
        required:true
    }
  
})

export const TaskSchema = mongoose.model('TodoTask', taskSchema)