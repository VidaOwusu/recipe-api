import { UserModel } from "../models/user.js";
import bcrypt from "bcrypt";


export const register = async (req, res, next) =>{
    try {
        //Hash the user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    
        //Create a new user
        const registeredUser = await UserModel.create({
            ...req.body,
            password: hashedPassword
        });
    
        //Return a response
        res.status(201).json('User registered successfully')
    } catch (error) {
        next(error)
        
    }
}

export const login = async () => {}

export const logout = async () => {}

export const profile = async () => {}