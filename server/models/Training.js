const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true,
    },
    petName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }
});

const Training = mongoose.model('Training', trainingSchema)

module.exports = Training;