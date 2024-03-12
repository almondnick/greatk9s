const mongoose = require('mongoose');

const { Schema } = mongoose;

const sittingSchema = new Schema({
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

const Sitting = mongoose.model('Sitting', sittingSchema)

module.exports = Sitting;