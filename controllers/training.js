const express = require('express');
const router = express.Router();
const Training = require('../models/Training');


router.post('/', async (req, res) => {
    try {

        const { user, date, time, comments } = req.body;

        
        const newTraining = new Training({
            user,
            date,
            time,
            comments
        });

        
        const savedTraining = await newTraining.save();

        res.status(201).json(savedTraining); // Sends back the saved training appointment
    } catch (error) {
        console.error('Error saving training:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
});

module.exports = router;