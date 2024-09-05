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

 