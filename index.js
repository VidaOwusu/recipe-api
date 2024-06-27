import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL);


//Create Express App
const app = express();

//Apply middlewares
app.use(express.json());


//Use routes
app.use(recipeRouter);


//Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});






//2AMWFJO3eIPl4axV