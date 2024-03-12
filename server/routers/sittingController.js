const express = require('express');
const router = express.Router();
const Sitting = require('../models/Sitting');

router.post('/submit-sitting', async (req, res) => {
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
    } catch (err) {
        console.error('Failed to save dog sitting request', err);
        res.status(500).json({ error: 'Server error' });
    }
});