const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    dietary: {
        type: String,
        required: true,
        enum: ['Vegan', 'Vegetarian', 'No Preference'],
    }

});

module.exports = mongoose.model('User', UserSchema);