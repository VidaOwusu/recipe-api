import { json } from "express";
import { RecipeModel } from "../models/recipe.js";

//Get all recipes
export const getRecipes = async (req, res, next) => {
   try {
      //Get query params
      const { 
         filter = "{}", 
         sort = "{}",
         fields = "{}",
         limit = 10, 
         skip = 0, 
         } = req.query;
      //Get all recipes from database
      const allRecipes = await RecipeModel
         .find(JSON.parse(filter))
         .sort(JSON.parse.sort)
         .select(JSON.parse(fields))
         .limit(limit)
         .skip(skip);
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
      const newRecipe = await RecipeModel.create({
         ...req.body,
         image: req.file.filename
      });
      //Return response
      res.json(newRecipe);
      // res.json("Recipe Added");
   } catch (error) {
      next(error);
   }
}

//Update recipe
export const patchRecipe = async (req, res, next) => {
   try {
      //Update recipe by id
      const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      //Return response
      res.status(201).send(updatedRecipe);
   } catch (error) {
      next(error);
   }
}


//Delete recipe
export const deleteRecipe = async (req, res, next) => {
   try {
      //Delete recipe by id
      const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
      //Return response
      res.json(deletedRecipe)

   } catch (error) {
      next(error)
   }
}

//Get a particular recipe
export const getRecipe = async (req, res, next) => {
   try {
      const getARecipe = await RecipeModel.findById(req.params.id)
      res.json(getARecipe)
   } catch (error) {
      next(error);
   }
}