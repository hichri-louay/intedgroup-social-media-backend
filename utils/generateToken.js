const jwt = require('jsonwebtoken');

const generateToken = (id) => { 
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRE_IN });
}

module.exports = generateToken;