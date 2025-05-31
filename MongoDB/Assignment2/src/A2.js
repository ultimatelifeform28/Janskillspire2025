const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const app = express ();
const router = require ('./routers/todorouter.js');

app.use(bodyParser.json ());

app.use('/', router);

const port = 8000;

const connectionString = "mongodb+srv://lasanejacorey:iXPhL3Qlq7D9VVY0@cluster0.e7hjecq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString)
.then(()=>{
    console.log("Connect to DB")
 
    app.listen(port, ()=>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})


