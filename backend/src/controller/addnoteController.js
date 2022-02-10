const express = require('express');
const router = express.Router();

require('../db/conn');

const AddNote = require('../model/addnoteSchema');


//  Add note  post method router 

router.post('/api/user/note/addnote', async (req, res) => {

    const { title, description, folder_id} = req.body;

    if (!title|| !description||!folder_id) {
        return res.status(422).json({ error: " please fill the correct proprly" });
    }

    try {
        const AddNoteExist = await AddNote.findOne({ title: Title })

        if (AddNoteExist) {
            return res.status(422).json({ error: " notes  already exits" });
        } else {

            const addnote = new AddNote({ title, description, folder_id });

            await addnote.save();

            res.status(201).json({ message: " Adding the notes completeted" });
        }


    } catch (err) {
        console.log(err);

    }

});




      //  get method throw  get the Add note

router.get('/api/user/note', async (req, res) => {

    try {
        const {title, folder_id } = req.body;

        if (!title||!folder_id ) {
            return res.status(400).json({ error: " please fill the data " });
        }

        const addnoteget = await AddNote.find({title:folder_id });

        console.log(addfolderget);
        if (!addnoteget){
            console.log('please enter correct title');
            res.json({ messe: " note not found  --" });
        }
        else{
        res.json({ messe: " note adding is done --" });}


    } catch (err) {
        console.log(err);
    }

});


module.exports = router;