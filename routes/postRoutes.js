const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create',authMiddleware, postController.createPost);
router.post('/:postId/like',authMiddleware, postController.likePost);

module.exports = router;