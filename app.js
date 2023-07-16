
// here we use all the required middleware 

import express from 'express'
import { config } from 'dotenv';
import userRouter from './routes/userRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { errorMiddleware } from './middlewares/errorHandeler.js';


config({
    path:'./data/config.env'
})

export const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))
app.use(express.json()) //express json is used for sending the data to the respone field while posting the request 
app.use(cookieParser()) // use for acccessing cookie present in the req
app.use('/users',userRouter)
app.use('/tasks',taskRouter)

app.get('/',(req,res)=>{
    res.send("Server Stared")
})

app.use(errorMiddleware)