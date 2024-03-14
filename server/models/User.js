const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    petName: {
        type: String,
        required: false,
      },
    phoneNumber: {
        type: String,
        required: false,
      },
    password: {
        type: String,
        required: true,
        minlength: 5
      },
    trainingApmts: [ // For the dogs
      {
        type: Schema.Types.ObjectId,
        ref: 'Training',
      },
    ],
    sittingApmts: [ // For the dogs
      {
        type: Schema.Types.ObjectId,
        ref: 'Sitting',
      },
    ],
    appointments: [ // For the user to get information or just talk in person about stuff....?
      {
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
      },
    ],
    
});

// Sets up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });

  // compares incoming password with hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;