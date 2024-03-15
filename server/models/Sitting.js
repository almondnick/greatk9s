const mongoose = require('mongoose');

const { Schema } = mongoose;

const sittingSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true,
    },
    petName: {
        type: String,
        required: true,
    },
    appointmentStartDate: {
        type: String,
        required: true,
    },
    appointmentEndDate: {
        type: String,
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