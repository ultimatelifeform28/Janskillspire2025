const express = require("express")
const router = express.Router();
const {getData, postData} = require("../controllers/recipescontroller.js")


router.get("/home", getData);


router.post("/postrequest", postData);


module.exports = router;

// Get all recipes
const getAllRecipes = (req, res) => {
    res.send(recipes);
};

// Get a specific recipe by ID
const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id);
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe) {
        res.send(recipe);
    } else {
        res.status(404).send({ message: 'Recipe not found' });
    }
};

// Add a new recipe
const addRecipe = (req, res) => {
    const { title, ingredients, instructions, completed } = req.body;

    if (!title || !ingredients || !instructions) {
        return res.status(400).send({ message: 'Title, ingredients, and instructions are required' });
    }

    const newRecipe = {
        id: recipes.length + 1,
        title,
        ingredients,
        instructions,
        completed: completed || false,
    };

    recipes.push(newRecipe);
    res.status(201).send(newRecipe);
};

// Update a recipe by ID
const updateRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

    if (recipeIndex === -1) {
        return res.status(404).send({ message: 'Recipe not found' });
    }

    const { title, ingredients, instructions, completed } = req.body;

    if (!title || !ingredients || !instructions) {
        return res.status(400).send({ message: 'Title, ingredients, and instructions are required' });
    }

    recipes[recipeIndex] = {
        id,
        title,
        ingredients,
        instructions,
        completed: completed || false,
    };

    res.send(recipes[recipeIndex]);
};

// Delete a recipe by ID
const deleteRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

    if (recipeIndex === -1) {
        return res.status(404).send({ message: 'Recipe not found' });
    }

    recipes.splice(recipeIndex, 1);
    res.send({ message: 'Recipe deleted successfully' });
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    deleteRecipe,
};


