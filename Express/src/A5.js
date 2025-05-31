const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

let todos = [
    { 
        id: 1,
        title: 'Buy groceries',
        description: 'Milk, eggs, bread, and fruits from the supermarket',
        completed: false
    },
    {
        id: 2,
        title: 'Clean the house',
        description: 'Vacuum the living room, mop the kitchen, and dust shelves',
        completed: true
    },
    {
        id: 3,
        title: 'Finish project report',
        description: 'Write and submit the final draft of the quarterly report',
        completed: false
    },
    {
        id: 4,
        title: 'Workout at the gym',
        description: '1-hour session focused on legs and cardio',
        completed: false
    },
    {
        id: 5,
        title: 'Call Mom',
        description: 'Check in with mom and catch up about the week',
        completed: true
    },
    {
        id: 6,
        title: 'Book doctor appointment',
        description: 'Schedule annual physical check-up',
        completed: false
    },
    {
        id: 7,
        title: 'Read 20 pages',
        description: 'Continue reading \"Atomic Habits\" by James Clear',
        completed: false
    },
    {
        id: 8,
        title: 'Organize workspace',
        description: 'Declutter desk, file paperwork, and clean computer screen',
        completed: false
    }
];

app.get("/todos", (request, response) => {
    response.send(todos); // Send the list of todos as the response
});

app.get("/todos/:id", (request, response) => {
    let id = request.params.id; // Extract the todo ID from the route parameter
    let todo = todos.find((todo) => todo.id == id); // Find the todo with the matching ID
    response.send(todo); // Send the found todo as the response
});


app.post("/todos", (request, response) => {
    let todo = request.body; // Get the new todo data from the request body
    todos.push(todo); // Add the new todo to the todos array
    response.send(todos); // Send the updated list of todos as the response
});

app.put("/todos/:id", (request, response) => {
    let id = request.params.id; // Extract the todo ID from the route parameter
    let todoIndex = todos.findIndex((todo) => todo.id == id); // Find the index of the todo with the matching ID
    todos[todoIndex] = request.body; // Replace the todo at the found index with the new data
    response.send(todos); // Send the updated list of todos as the response 
});

app.delete("/todos/:id", (request, response) => {
    let id = request.params.id; // Extract the todo ID from the route parameter
    let todoIndex = todos.findIndex((todo) => todo.id == id); // Find the index of the todo with the matching ID
    todos.splice(todoIndex, 1); // Remove the todo from the array
    response.send(todos); // Send the updated list of todos as the response
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

