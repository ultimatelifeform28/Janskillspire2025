const express = require("express")
const bodyParser = require("body-parser")
const mongoose =  require('mongoose');
const app = express()
const postRoutes = require('./routers/postRoutes'); // Make sure this path is correct
const cors = require('cors')
const userRoutes = require('./routers/userRoutes.js')


app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.use(postRoutes) // This mounts /api/posts and /api/posts POST/GET

const PORT = 8000

const connectionString = "mongodb+srv://lasanejacorey:iXPhL3Qlq7D9VVY0@cluster0.e7hjecq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString)
.then(()=>{
    console.log("Connect to DB")

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})