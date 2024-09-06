const { successResponse, errorResponse } = require('../utils/responseHandler')
const profileService = require('../services/profileService');


module.exports.changePassword = async (req, res) => { 
    try {
        const userId = req.userId;
        const { oldPassword, newPassword } = req.body;
        const user = await profileService.changePassword(userId, oldPassword, newPassword);
        return successResponse(res, user, 'Password changed successfully', 200);
    } catch(err) {
        console.log({err})
        return errorResponse(res, err.message);
    }
}