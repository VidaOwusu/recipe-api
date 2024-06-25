import express from "express";
import recipeRouter from "./routes/recipes.js";

//Create Express App
const app = express();

//Define routes
app.get('/', (req, res)=>{
    res.json('Welcome to Backend Vidash');
});

app.post('/login', (req, res)=>{
    res.json('Login successful');
});

app.patch('/menu', (req, res)=>{
    res.json('All sumptous foods are available');
});
app.patch('/about', (req, res)=>{
    res.json('Customer satisfaction is our hallmark');
});

//Use routes
app.use(recipeRouter);


//Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});