const mongoose = require('mongoose');


userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    conformpassword: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastame: {
        type: String,
        required: true
    },
    Phonenumber: {
        type: Number,
        required: true
    }
    
})

const User = mongoose.model('USER', userSchema);

module.exports = User;
