import mongoose from 'mongoose';

// here the mongo url is only avaialbe in mongoshell , so copy the link from mongo shell 

export const connectDB = ()=>{
mongoose
  .connect(process.env.MONGO_URL, {
    dbName:"Project"
  })
  .then(() => console.log("database connected"));
}