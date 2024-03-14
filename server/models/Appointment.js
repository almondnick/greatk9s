const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({
    description: {
        type: String,
        required: true,
    },

    appointmentDate: {
        type: Date,
        required: true,
    },

    appointmentTime: {
        type: String,
        required: true,
    }
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;