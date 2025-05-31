const { response } = require('express');
const Book = require('../models/Book.js');

const addBook = (request, response) =>{
    const NewBook = new Book(request.body); // Create a new book instance with the request body

    NewBook.save() // Save the new book to the database
        .then((book) => {
            response.status(201).json(book); // Respond with the created book and a 201 status code
        })
        .catch((error) => {
            response.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status code
        });
}

const getAllBooks = async (request, response) => {
    console.log('Fetching all books...'); // Log the request for debugging
    const allBooks = await Book.find(); // Retrieve all books from the database

    response.status(200).json(allBooks); // Respond with the list of books and a 200 status code

}

const getBookById = async (request, response) =>{
    Book.findById(request.params.id) // Find a books by its ID
        .then((book) => {
            response.status(200).json(book); // Respond with the found Book and a 200 status code
        })
        .catch((error) => {
            response.status(404).json({ error: 'Book not found' }); // Handle errors and respond with a 404 status code
        });

}


const updateBook = async (request, response) => {
    Book.findByIdAndUpdate(request.params.id, request.body, { new: true }) // Find a book by its ID and update it with the request body
        .then((book) => {
            response.status(200).json(book); // Respond with the updated book and a 200 status code
        })
        .catch((error) => {
            response.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status code
        });

}


const deleteBook = async (request, response) => {
    Book.findByIdAndDelete(request.params.id) // Find a Book by its ID and delete it
        .then(() => {
            response.status(204).send(); // Respond with a 204 status code indicating no content
        })
        .catch((error) => {
            response.status(404).json({ error: 'Book not found' }); // Handle errors and respond with a 404 status code
        });
}


module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}; // Export the functions to be used in other files