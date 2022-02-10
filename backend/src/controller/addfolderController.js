const express = require('express');
const router = express.Router();

require('../db/conn');

const AddFolder = require('../model/addfolderSchema');


//  Add folder  post method router 

router.post('/api/user/addfolder', async (req, res) => {

    const { foldername, is_private, pin} = req.body;

    if (!foldername||!is_private||!pin) {
        return res.status(422).json({ error: " please fill the correct proprly" });
    }

    try {
        const AddFolderExist = await AddFolder.findOne({  foldername: foldername })

        if (bookExist) {
            return res.status(422).json({ error: " Folder already exits" });
        } else {

            const addfolder = new Addfolder({ foldername, is_private, pin });

            await addfolder.save();

            res.status(201).json({ message: " Adding the folder completeted" });
        }


    } catch (err) {
        console.log(err);

    }

});




      //  get method throw  get the Add folder 

router.get('/api/user/folder', async (req, res) => {

    try {
        const { foldername, pin } = req.body;

        if (!foldername || !pin) {
            return res.status(400).json({ error: " please fill the data " });
        }

        const addfolderget = await AddFolder.find({foldername: pin  });

        console.log(addfolderget);
        if (!addfolderget){
            console.log('please enter correct foldername');
            res.json({ messe: " folder not found  --" });
        }
        else{
        res.json({ messe: " folder adding is done --" });}


    } catch (err) {
        console.log(err);
    }

});


module.exports = router;