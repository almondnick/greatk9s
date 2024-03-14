const mongoose = require('mongoose');

const { Schema } = mongoose;

const sittingSchema = new Schema({

    appointmentStartDate: {
        type: Date,
        required: true,
    },
    appointmentEndDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
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