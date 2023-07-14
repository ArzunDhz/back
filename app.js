import express from  'express'
import cookieParser from 'cookie-parser';
import UserRouter from './routes/userRouter.js'
import TaskRouter from './routes/task.js'
import { errorMiddleWare } from './middlewares/error.js';
import cors from 'cors';

export const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT", "DELETE"],
    credentials:true
}))

app.use('/api/users', UserRouter)
app.use('/api/task', TaskRouter)
app.get('/',(req,res)=>{
    res.send('started');
})

app.use(errorMiddleWare)
