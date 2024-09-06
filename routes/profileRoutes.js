const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');


router.put('/change-password', authMiddleware, profileController.changePassword);


module.exports = router;