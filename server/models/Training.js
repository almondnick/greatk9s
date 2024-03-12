const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
    user: {
        type: mongoose.schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
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