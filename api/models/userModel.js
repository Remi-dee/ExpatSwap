const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    
    firstName: {
        type: String,
        required: [true, 'Please add a firstName'],
      },
    lastName: {
      type: String,
      required: [true, 'Please add a lastName'],
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please add a phone number'],
        
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    
    dateOfBirth: {
        type: String,
        required: [true, 'Please add a DOB'],

    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
