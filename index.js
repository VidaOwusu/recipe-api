import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL);


//Create Express App
const app = express();

//Apply middlewares
app.use(express.json());


//Use routes
app.use(recipeRouter);
app.use(categoryRouter);


//Listen for incoming requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});






//2AMWFJO3eIPl4axV