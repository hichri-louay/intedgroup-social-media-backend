const { successResponse, errorResponse } = require('../utils/responseHandler')
const profileService = require('../services/profileService');


module.exports.changePassword = async (req, res) => { 
    try {
        const userId = req.userId;
        const { oldPassword, newPassword } = req.body;
        const user = await profileService.changePassword(userId, oldPassword, newPassword);
        const userResponse = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }
        return successResponse(res, userResponse, 'Password changed successfully', 200);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const userId = req.userId;
        const {newEmail, newFirstName, newLastName, password } = req.body;
        const user = await profileService.updateUser(userId, newEmail, newFirstName, newLastName, password)
        const userResponse = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }
        return successResponse(res, userResponse, 'User updated successfully', 200);
    } catch(err) {
        return errorResponse(res, err.message)
    }
}