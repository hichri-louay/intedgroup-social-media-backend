const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');


router.put('/change-password', authMiddleware, profileController.changePassword);
router.put('/update', authMiddleware, profileController.updateUser);
router.post('/upload-profile-picture', authMiddleware, upload.single('profilePicture'), profileController.uploadProfilePicture);

module.exports = router;