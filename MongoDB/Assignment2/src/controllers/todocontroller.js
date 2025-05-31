const { response } = require('express');
const todo = require('../models/todo');

const addtodos = (request, response) =>{
    const Newtodo = new todo(request.body); // Create a new todo instance with the request body

    Newtodo.save() // Save the new todo to the database
        .then((todo) => {
            response.status(201).json(todo); // Respond with the created todo and a 201 status code
        })
        .catch((error) => {
            response.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status code
        });
}

const getAlltodos = async (request, response) => {
    const alltodos= await todo.find(); // Retrieve all todo from the database
    console.log('Fetching all todos...'); // Log the request for debugging

    response.status(200).json(alltodos); // Respond with the list of todos and a 200 status code

}

const gettodosById = async (request, response) =>{
    todo.findById(request.params.id) // Find a todo by its ID
        .then((todo) => {
            response.status(200).json(todo); // Respond with the found todo and a 200 status code
        })
        .catch((error) => {
            response.status(404).json({ error: 'todo not found' }); // Handle errors and respond with a 404 status code
        });

}


const updatetodos = async (request, response) => {
    todo.findByIdAndUpdate(request.params.id, request.body, { new: true }) // Find a book by its ID and update it with the request body
        .then((todo) => {
            response.status(200).json(todo); // Respond with the updated todo and a 200 status code
        })
        .catch((error) => {
            response.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status code
        });

}


const deletetodos = async (request, response) => {
    todo.findByIdAndDelete(request.params.id) // Find a todo by its ID and delete it
        .then(() => {
            response.status(204).send(); // Respond with a 204 status code indicating no content
        })
        .catch((error) => {
            response.status(404).json({ error: 'todo not found' }); // Handle errors and respond with a 404 status code
        });
}


module.exports = {
    addtodos,
    getAlltodos,
    gettodosById,
    updatetodos,
    deletetodos
}; // Export the functions to be used in other files