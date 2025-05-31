const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import dotenv to load environment variables
const recipesRouter = require('./routers/recipesRouter'); // Import the recipes router

dotenv.config(); // Load environment variables from .env file

const app = express();


// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the recipes router for the /recipes endpoint
app.use('/recipes', recipesRouter);

const port = 8000; // Define the port the server will run on

// MongoDB connection string (should ideally come from .env for security)
const connectionString = "mongodb+srv://lasanejacorey:iXPhL3Qlq7D9VVY0@cluster0.e7hjecq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using the connection string
mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB"); // Log success message if connection is successful
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err); // Log error message if connection fails
    });

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log message indicating the server is running
});