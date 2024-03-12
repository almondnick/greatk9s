const express = require('express');
const router = express.Router();
const Training = require('../models/Training');

router.post('/submit-training', async (req, res) => {
    try {
        const { user, date, time, comments } = req.body;
        
        const newTraining = new Training({
            user,
            date,
            time,
            comments
        });

        const savedTraining = await newTraining.save();

        res.status(201).json(savedTraining);
    } catch (err) {
        console.error('Failed to save dog training request', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router; 