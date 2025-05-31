const express = require('express');
const router = express.Router();
const {addtodos, getAlltodos, gettodosById, updatetodos, deletetodos} = require('../controllers/todocontroller.js');


router.get('/todos', getAlltodos); // Retrieve all todos
router.get('/todos/:id', gettodosById); // Retrieve a specific todo by ID
router.post('/addtodos', addtodos); // Add a new todo
router.put('/todos/:id', updatetodos); // Update an existing todo by ID
router.delete('/todos/:id', deletetodos); // Delete a todo by ID


module.exports = router; // Export the router to be used in other files