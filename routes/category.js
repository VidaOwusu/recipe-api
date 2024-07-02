import { Router } from "express";
import { localUploads } from "../middleware/upload.js";
import { getCategories, postCategory } from "../controllers/category.js";

//Create a router
const categoryRouter = Router();

//Define routes
categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', localUploads.single('image'), postCategory);

//Export router
export default categoryRouter;