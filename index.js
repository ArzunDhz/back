import { app } from "./app.js";
import { connectDataBase } from './data/connectDB.js';
connectDataBase()

app.listen(4000,()=>{
    console.log("Server started")
})
