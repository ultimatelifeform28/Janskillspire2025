const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Sample data: Array of books
let books = [
    { 
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald'
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
    }
];

// GET /books - Retrieve all books
app.get("/books", (request, response) => {
    response.send(books); // Send the list of books as the response
});

// GET /books/:id - Retrieve a specific book by ID
app.get("/books/:id", (request, response) => {
    let id = request.params.id; // Extract the book ID from the route parameter
    let book = books.find((book) => book.id == id); // Find the book with the matching ID
    response.send(book); // Send the found book as the response
});

// POST /books - Add a new book
app.post("/books", (request, response) => {
    let book = request.body; // Get the new book data from the request body
    books.push(book); // Add the new book to the books array
    response.send(books); // Send the updated list of books as the response
});

// PUT /books/:id - Update an existing book by ID
app.put("/books/:id", (request, response) => {
    let id = request.params.id; // Extract the book ID from the route parameter
    let bookIndex = books.findIndex((book) => book.id == id); // Find the index of the book with the matching ID
    books[bookIndex] = request.body; // Replace the book at the found index with the new data
    response.send(books); // Send the updated list of books as the response
});

// DELETE /books/:id - Delete a book by ID
app.delete("/books/:id", (request, response) => {
    let id = request.params.id; // Extract the book ID from the route parameter
    let bookIndex = books.findIndex((book) => book.id == id); // Find the index of the book with the matching ID
    books.splice(bookIndex, 1); // Remove the book from the array
    response.send(books); // Send the updated list of books as the response
});

// Start the server on port 8000
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});