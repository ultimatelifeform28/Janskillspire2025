const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Todo model
const todoSchema = new Schema({
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
    completed: {
        type: Boolean,
        default: false, // Default completion status is false
    },
})
    

module.exports = mongoose.model('todo', todoSchema); // Export the todo model based on the schema