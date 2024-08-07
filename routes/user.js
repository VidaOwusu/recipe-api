import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.js";
import { checkUserSession } from "../middleware/auth.js";

//Create route
const userRouter = Router();

//Define routes
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', checkUserSession, logout)
userRouter.get('/profile', checkUserSession, profile)


//Export router
export default userRouter