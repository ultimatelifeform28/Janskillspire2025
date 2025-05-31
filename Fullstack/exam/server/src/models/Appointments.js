const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Appointment', AppointmentsSchema)