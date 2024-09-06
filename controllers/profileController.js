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

module.exports.uploadProfilePicture = async (req, res) => {
    try {
        if (!req.file) {
            return errorResponse(res, 'No file uploaded');
        }
        const userId = req.userId;
        const fileUrl = req.file.location; 
        const updatedUser = await profileService.updateUserProfilePicture(userId, fileUrl);
        const userResponse = {
            id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            picture: updatedUser.picture
        };
        return successResponse(res, userResponse, 'Profile picture uploaded successfully');
    } catch (err) {
        return errorResponse(res, err.message);
    }
};