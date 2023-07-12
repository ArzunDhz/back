import express from 'express'
import { newTask , getMyTask, updateTask, deleteTask } from '../controller/task.js';
import { isAuthencated } from '../middlewares/auth.js';

const router = express.Router()


router.post('/new', isAuthencated  ,newTask )

router.get('/my', isAuthencated  , getMyTask  )

router.route('/:id')
.put(  isAuthencated ,updateTask )
.delete(  isAuthencated ,deleteTask)
export default router;