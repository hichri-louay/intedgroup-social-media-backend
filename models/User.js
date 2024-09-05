const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();



const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide a last name']
    },
    email: { 
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true
    },
    password: { 
        type: String,
        required: [true, 'Please provide a password']
    },
    picture: {
        type: String,
        default: ''
    }
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;