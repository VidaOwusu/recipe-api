import { Router } from "express";
import { remoteUpload } from "../middleware/upload.js";
import { addRecipes, deleteRecipe, getRecipe, getRecipes, patchRecipe } from "../controllers/recipe.js";
import { checkUserSession } from "../middleware/auth.js";

//Create a router
const recipeRouter = Router();


//Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, remoteUpload.single('image'), addRecipes);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

//Export router
export default recipeRouter;