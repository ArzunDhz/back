import mongoose from 'mongoose';

export const connectDataBase = ()=>{
mongoose
  .connect("mongodb+srv://admin-arjun:9869579607Aa1@cluster0.ldmnk.mongodb.net/?retryWrites=true", {
    dbName: "TodoBackend",
  })
  .then(() => console.log("database connected"));
}
