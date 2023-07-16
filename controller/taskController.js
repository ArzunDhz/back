import ErrorHandler from "../middlewares/errorHandeler.js";
import { TaskSchema } from "../models/TaskSchema.js";

export const addNewTask = async (req, res, next) => {
try {
  const {description} = req.body;
  await TaskSchema.create({
    description,
    user: req.userData,
  });
  res.json({
    sucess: true,
    message: "Added New Task",
  });
} catch (error) {
  next(error
    )
}

};





export const getAllTask = async (req, res, next) => {
try {
  const userData = req.userData;
  const user  = req.userData._id;
  const alluserTask = await TaskSchema.find({user})
  if(!alluserTask) return res.status(404).json({message:"No task"})
    res.json({
      sucess: true,
      message: "Got All Task",
      userData,
      alluserTask,
    });
} catch (error) {
  next(error)
}
};



export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params; // we obtain dynamic id from the url /: 
    const task = await TaskSchema.findById(id);
    if (!task)
      return res.status(404).json({
        sucess: false,
        message: "Invalid Task",
      });
    await task.deleteOne();
    res.status(201).json({
      sucess: true,
      message: "Task Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
