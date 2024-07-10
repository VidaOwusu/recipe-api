import { Router } from "express";
import { remoteUpload } from "../middleware/upload.js";
import { getCategories, postCategory } from "../controllers/category.js";
import { checkUserSession } from "../middleware/auth.js";

//Create a router
const categoryRouter = Router();


//Define routes
categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories',checkUserSession, remoteUpload.single('image'), postCategory);

//Export router
export default categoryRouter;