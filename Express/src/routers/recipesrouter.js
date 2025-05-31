const express = require('express'); // Import Express to create a router
const {
    getAllRecipes, // Controller function to get all recipes
    getRecipeById, // Controller function to get a recipe by ID
    addRecipe, // Controller function to add a new recipe
    updateRecipe, // Controller function to update a recipe by ID
    deleteRecipe, // Controller function to delete a recipe by ID
} = require('../controllers/recipescontroller'); // Import controller functions

const router = express.Router(); // Create a new router instance

// Define routes for recipes

// GET /recipes - Retrieve all recipes
router.get('/', getAllRecipes);

// GET /recipes/:id - Retrieve a specific recipe by ID
router.get('/:id', getRecipeById);

// POST /recipes - Add a new recipe
router.post('/', addRecipe);

// PUT /recipes/:id - Update an existing recipe by ID
router.put('/:id', updateRecipe);

// DELETE /recipes/:id - Delete a recipe by ID
router.delete('/:id', deleteRecipe);

module.exports = router; // Export the router to be used in other parts of the application