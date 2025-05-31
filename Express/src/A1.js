const express = require('express');
const app = express();
const port = 8000


app.get('/display-first_name', (request, response) => {
    response.send('<h1>Jacorey</h1>')
})

app.get('/display-lasane_name', (request, response) => {
    response.send('<h1>Lasane</h1>')
})

app.get('/display-food', (request, response) => {
    response.send('<h1>Pizza</h1>')
})

app.get('/display-vacation', (request, response) => {
    response.send('<h1>Hawaii</h1>')
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

