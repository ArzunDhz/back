
import { app } from './app.js'
import { connectDB } from './data/connectDB.js';
connectDB()



app.listen(process.env.PORT,()=>{
    console.log(`Server started at ${process.env.PORT}`)
  })