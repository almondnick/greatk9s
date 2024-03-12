const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    service: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },

    appointmentStartDate: {
        type: Date,
        required: true,
    },

    appointmentEndDate: {
        type: Date,
        required: true,
    },

    specialNeeds: {
        type: String,
        required: false,
    }
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;