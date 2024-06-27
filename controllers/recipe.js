import { RecipeModel } from "../models/recipe.js";

//Get all recipes
export const getRecipes = async (req, res, next)=>{
    try {
      //Get all recipes from database
      const allRecipes = await RecipeModel.find();
      //Return all recipes as response
      res.json(allRecipes);
    } catch (error) {
     next(error);
    }
 }

 //Post Recipe
 export const addRecipes = async (req, res, next) => {
    try {
        //Add Recipe to Database
        const newRecipe = await RecipeModel.create(req.body);
        //Return response
        res.json(newRecipe);
        // res.json("Recipe Added");
    } catch (error) {
        next(error);
    }
}

//Update recipe
export const patchRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
}

//Delete recipe
export const deleteRecipe = async (req, res, next) => {
   try {
    //Delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    //Return response
    res.json(deletedRecipe)
    //  res.json(`Recipe with ID ${req.params.id} deleted`);
   } catch (error) {
    next(error)
   }
}

//Get a particular recipe
export const getRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} received`);
}