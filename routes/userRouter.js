
import express from  'express'
import { allUserDetails,getMyProflie, login, registerNewUser , logout } from "../controller/userRouterFun.js";
import { isAuthencated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/all', allUserDetails)
router.post('/register', registerNewUser)
router.post('/login',login)
router.route('/me').get( isAuthencated,getMyProflie)
router.get('/logout',isAuthencated,logout)


export default router