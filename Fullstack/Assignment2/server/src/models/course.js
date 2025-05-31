const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        Default: Date.now
    },
    
})

module.exports = mongoose.model("Course", courseSchema)
// const mongoose = require("mongoose")