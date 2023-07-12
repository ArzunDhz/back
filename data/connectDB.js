import mongoose from 'mongoose';

export const connectDataBase = ()=>{
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "TodoBackend",
  })
  .then(() => console.log("database connected"));
}