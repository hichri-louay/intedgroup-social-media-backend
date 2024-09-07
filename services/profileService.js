const User = require('../models/User');
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');


const s3 = new S3Client({ 
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

const generateSignedUrl = async (key) => {
    const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
    });
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 604800 }); 
    return signedUrl;
}

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


const updateUser = async (userId, newEmail, newFirstName, newLastName, password) => {
    const user = await User.findById(userId);
    if(!user) {
        throw new Error('User not found');
    }
    if(!(await user.comparePassword(password))) {
        throw new Error('Invalid password');
    }
    user.email = newEmail;
    user.firstName = newFirstName;
    user.lastName = newLastName;
    await user.save();
    return user
}

const updateUserProfilePicture = async (userId, fileUrl) => {
    const s3Key = fileUrl.split('.amazonaws.com/')[1];
    const signedUrl = await generateSignedUrl(s3Key);
    const user = await User.findByIdAndUpdate(userId, { picture: signedUrl }, { new: true });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}


module.exports = { changePassword, updateUser,updateUserProfilePicture };