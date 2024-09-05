const authService = require('../services/authService');
const { successResponse, errorResponse} = require('../utils/responseHandler');

module.exports.signup = async (req, res) => { 
    try {
        const userData = req.body;
        const { newUser, token } = await authService.signup(userData);
        const userResponse = {
            id: newUser._id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
        }
        return  successResponse(res, { user: userResponse, token}, 'User created successfully', 201);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}

module.exports.signin = async (req, res) => { 
    try {
        const userData = req.body;
        const { user, token } = await authService.signin(userData);
        const userResponse = {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
        }
        return  successResponse(res, { user: userResponse, token}, 'User logged in successfully', 200);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}

 