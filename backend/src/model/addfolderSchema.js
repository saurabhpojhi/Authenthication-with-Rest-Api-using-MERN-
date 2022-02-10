const mongoose = require('mongoose');


addfolderSchema = new mongoose.Schema({
    foldername: {
        type: String,
        required: true
    },
    is_private: {
        type: String,
        required: true
    },
    
    pin: {
        type: Number,
        required: true
    }
    
})

const Addfolder = mongoose.model('ADDFOLDER', addfolderSchema);

module.exports = Addfolder;
