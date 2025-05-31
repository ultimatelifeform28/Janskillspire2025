const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for the Book model

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

})


module.exports = mongoose.model('Book', bookSchema); // Export the Book model based on the schema