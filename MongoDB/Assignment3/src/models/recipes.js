const mongoose = require('mongoose');

// Define the schema for the Recipes model
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is required
        trim: true, // Removes extra spaces
    },
    description: {
        type: String,
        required: false, // Description is optional
        trim: true,
    },
    ingredients: {
        type: [String], // Array of strings for ingredients
        required: true, // Ingredients are required
    },
    instructions: {
        type: String,
        // Instructions are required
            trim: true,
            },
        });

        module.exports = mongoose.model('recipes', recipeSchema); // Export the Recipe model based on the schema