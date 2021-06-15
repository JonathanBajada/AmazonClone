const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'Email cannot be blank'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true
  },
  hash: String,
  salt: String
}, {timestamps: true});


UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('user', UserSchema);