import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next)=>{
    try {
        //Get all categories from database
        const allCategories = await CategoryModel.find();
        //return response
        res.status(200).json(allCategories);   
    } catch (error) {
        next(error)
    }
}

//Post a category to database
export const postCategory = async (req, res, next)=>{
    try {
       //Add a category to database
       const newCategory = await CategoryModel.create(req.body);
       //Return response
       res.status(201).json(newCategory);
    } catch (error) {
       next(error) 
    }
}