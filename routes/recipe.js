import { Router } from "express";
import { localUploads } from "../middleware/upload.js";
import { addRecipes, deleteRecipe, getRecipe, getRecipes, patchRecipe } from "../controllers/recipe.js";

//Create a router
const recipeRouter = Router();

//Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', localUploads.single('image'), addRecipes);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

//Export router
export default recipeRouter;