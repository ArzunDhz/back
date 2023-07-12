
import { TaskSchema } from "../models/taskSchema.js" 



export const newTask = async (req,res,next)=>{
  try {
    const {title ,description}= req.body

  await  TaskSchema.create({
    title,
    description,
    user:req.user,
  })

  res.status(201).json({
    success:true,
    message:"Task added Successfully"
  })

  } catch (error) {
    next(error)
  }
    
}


export const getMyTask =async(req,res)=>{
  try {
    const userid = req.user._id;
const  task  = await  TaskSchema.find({user:userid})
 res.send({
  success:true,
  task
 })   
  } catch (error) {
    next(error)
  } 
}

export const updateTask =async(req,res)=>{
  
  try {
    const {id} = req.params;

    const task = await TaskSchema.findById(id)
    task.isCompleted = !task.isCompleted
    await task.save()
   
   
    res.send({
     success:true,
     message:"Successfully Updated",
     task
    }) 
  } catch (error) {
    next(error)
  }
   
}

export const deleteTask = async(req,res,next)=>{
try {
  const {id} = req.params;
  const task = await TaskSchema.findById(id)
  if(!task) return next( new Error("Invalid Task asdas")) 
  await  task.deleteOne()

 res.send({
  success:true,
  message:"Successfully deleted"
 })    
} catch (error) {
  next(error)
}

}