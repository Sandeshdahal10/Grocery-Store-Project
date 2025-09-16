import express from 'express';
import {logout,isAuth,login, register} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/auth',authUser ,isAuth)
userRouter.get('/logout',authUser,  logout)

export default userRouter;

//caching
//pnpm add express-rate-limit
//turbopack