const express = require('express');
const router = express.Router();
const {addBook, getAllBooks, getBookById, updateBook, deleteBook} = require('../controllers/bookscontrollers.js');


router.get('/books', getAllBooks); // Retrieve all books
router.get('/books/:id', getBookById); // Retrieve a specific book by ID
router.post('/addbooks', addBook); // Add a new book
router.put('/books/:id', updateBook); // Update an existing book by ID
router.delete('/books/:id', deleteBook); // Delete a book by ID


module.exports = router; // Export the router to be used in other files