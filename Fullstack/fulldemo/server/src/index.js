const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const app = express ();
const router = require ('./routers/booksrouters.js');
const cors = require ('cors');

app.use(bodyParser.json ());
app.use(cors());

app.use('/', router);

const port = 8000;

const connectionString = "mongodb+srv://lasanejacorey:iXPhL3Qlq7D9VVY0@cluster0.e7hjecq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect (connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => {
        console.log ('Connected to MongoDB');
})
.catch (err => {
    console.error ('Error connecting to MongoDB', err);
});

app.listen (port, () => {
    console.log (`Server is running on port ${port}`);
});



