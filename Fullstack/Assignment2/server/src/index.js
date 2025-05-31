const express = require("express")
const bodyParser = require("body-parser")
const mongoose =  require('mongoose');
const app = express()
const router = require('./routers/router')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.use('/',router)

const port = 8000

const connectionString = ""

mongoose.connect(connectionString)
.then(()=>{
    console.log("Connect to DB")

    app.listen(port, ()=>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})