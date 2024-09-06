const User = require('../models/User');


const changePassword = async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId)
    if (!user) {
        throw new Error('User not found');
    }
    if (!(await user.comparePassword(oldPassword))) {
        throw new Error('Invalid old password');
    }
    user.password = newPassword;
    await user.save();
    return user;
}


module.exports = { changePassword };