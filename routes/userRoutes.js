
import express from 'express'
import { login, logout, registerNewUser ,getUserInfo ,deleteUser} from "../controller/userController.js";
import { userAuthenication } from "../middlewares/userAuthintication.js";
const router = express.Router();


router.post('/register', registerNewUser)
router.post('/login', login)
router.get('/logout', userAuthenication, logout)
router.get('/getuserinfo', userAuthenication, getUserInfo)
router.delete('/:deleteuser', userAuthenication, deleteUser)

export default router