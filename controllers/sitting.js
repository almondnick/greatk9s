const express = require('express');
const router = express.Router();
const Sitting = require('../models/Sitting');


router.post('/', async (req, res) => {
    try {
        
        const { user, date, time, comments } = req.body;

        
        const newSitting = new Sitting({
            user,
            date,
            time,
            comments
        });

        
        const savedSitting = await newSitting.save();

        res.status(201).json(savedSitting); 
    } catch (error) {
        console.error('Error saving sitting:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;