const express = require('express');
const app = express();
const port = 8000

app.get('/', (request, response) => {
    response.send('<h1>INDEX</h1>')
})

app.get('/display-name', (request, response) => {
    response.send('<h1>Jacorey</h1>')
})

app.get('/display-food', (request, response) => {
let img = "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcZ1GJ2tzkfPvUcJkcjtuyjLy3N8Yu9gJGQ&s"

    response.send(
        `
        <div>
            <h1>Pizza</h1>
            <img src="${img}" />
        </div>
        `
        );
    });

    app.get("/display-vacation", (request, response) => {
        response.send("<h1>Hawaii</h1>");
    })



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

