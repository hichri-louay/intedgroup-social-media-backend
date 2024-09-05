const User = require('../models/User');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

const signup = async (userData) => {  
    const { firstName, lastName, email, password } = userData;
    const userExists = await User.findOne({ email });
    if(userExists) {
        throw new Error('User already exists');
    }
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    const token = generateToken(newUser._id);
    return {newUser, token};
}

const signin = async (userData) => {  
    const { email, password } = userData;
    const user = await User.findOne({ email });

    if(!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }
    
    const token = generateToken(user._id);
    return { user, token };
}


module.exports = { signup, signin };

