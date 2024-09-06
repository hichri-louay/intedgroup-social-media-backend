const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create',authMiddleware, postController.createPost);
router.post('/:postId/like',authMiddleware, postController.likePost);
router.post('/:postId/comment', authMiddleware, postController.commentPost);
router.delete('/:postId', authMiddleware, postController.deletePost);
router.put('/:postId', authMiddleware, postController.updatePost);
router.delete('/:postId/comment/:commentId', authMiddleware, postController.deleteComment);
router.put('/:postId/comment/:commentId', authMiddleware, postController.updateComment);
router.get('/', postController.getAllPosts);
router.get('/user/:userId', postController.getPostsByUser);

module.exports = router;