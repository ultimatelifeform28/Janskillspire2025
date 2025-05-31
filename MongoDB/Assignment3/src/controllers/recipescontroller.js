const { response } = require('express');
const recipes= require('../models/recipes');

const addrecipes = (request, response) =>{
    const Newrecipes = new recipes(request.body); // Create a new recipes instance with the request body

    Newrecipes.save() // Save the new recipes to the database
        .then((recipes) => {
            response.status(201).json(recipes); // Respond with the created recipes and a 201 status code
        })
        .catch((error) => {
            response.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status code
        });
}

const getAllrecipes = async (request, response) => {
    const allrecipes = await recipes.find(); // Retrieve all recipes from the database

    response.status(200).json(allrecipes); // Respond with the list of recipes and a 200 status code

}

const getrecipesById = async (request, response) =>{
    recipes.findById(request.params.id) // Find a recipes by its ID
        .then((recipes) => {
            response.status(200).json(recipes); // Respond with the found recipesand a 200 status code
        })
        .catch((error) => {
            response.status(404).json({ error: 'recipes not found' }); // Handle errors and respond with a 404 status code
        });

}


const updaterecipes = async (request, response) => {
    recipes.findByIdAndUpdate(request.params.id, request.body, { new: true }) // Find a recipes by its ID and update it with the request body
        .then((recipes) => {
            response.status(200).json(recipes); // Respond with the updated recipes and a 200 status code
        })
        .catch((error) => {
            response.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status code
        });

}


const deleterecipes = async (request, response) => {
    Book.findByIdAndDelete(request.params.id) // Find a recipes by its ID and delete it
        .then(() => {
            response.status(204).send(); // Respond with a 204 status code indicating no content
        })
        .catch((error) => {
            response.status(404).json({ error: 'recipes not found' }); // Handle errors and respond with a 404 status code
        });
}


module.exports = {
    addrecipes,
    getAllrecipes,
    getrecipesById,
    updaterecipes,
    deleterecipes
}; // Export the functions to be used in other files