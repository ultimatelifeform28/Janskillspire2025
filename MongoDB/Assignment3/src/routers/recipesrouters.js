const express = require('express');
const router = express.Router();
const {addrecipes, getAllrecipes, getrecipesById, updaterecipes, deleterecipes} = require('../controllers/recipescontroller.js');


router.get('/recipes', getAllrecipes); // Retrieve all recipes
router.get('/recipes/:id', getrecipesById); // Retrieve a specific recipes by ID
router.post('/addrecipes', addrecipes); // Add a new recipes
router.put('/recipes/:id', updaterecipes); // Update an existing recipes by ID
router.delete('/recipes/:id', deleterecipes); // Delete a recipes by ID


module.exports = router; // Export the router to be used in other files