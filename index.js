import express from "express";
import cors from 'cors'; //this middleware is used to integrate the frontend and backend.
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import MongoStore from "connect-mongo";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL);


//Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

//Apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads')); 
app.use(session({
    secret: process.env.SESSION_SECRET,
      resave: false,
     saveUninitialized: true,
     //cookie: { secure: true }
     store:MongoStore.create({
        mongoUrl: process.env.MONGO_URL
     })
}));


//Use routes
app.use(userRouter)
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


//Listen for incoming requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});






//2AMWFJO3eIPl4axV