const mongoose = require('mongoose');


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

const User = mongoose.model('User', UserSchema);

module.exports = User;