const mongoose = require('mongoose');


addnoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    folder_id: {
        type: string,
        required: true
    }
    
})

const Addnote = mongoose.model('ADDNOTE', addnoteSchema);

module.exports = Addnote;
