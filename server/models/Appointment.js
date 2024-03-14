const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({
    description: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
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