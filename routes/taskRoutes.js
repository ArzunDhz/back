
import express from  'express'
import { addNewTask , deleteTask  , getAllTask} from '../controller/taskController.js'
import { userAuthenication } from '../middlewares/userAuthintication.js';


const router = express.Router();

router.post('/addtask', userAuthenication ,addNewTask)
router.get('/alltask', userAuthenication ,getAllTask)
router.delete('/:id', userAuthenication ,deleteTask)



export default router