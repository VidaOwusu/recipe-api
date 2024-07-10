import { Router } from "express";
import { register } from "../controllers/user.js";

//Create route
const userRouter = Router();

//Define routes
userRouter.post('/register', register);


//Export router
export default userRouter