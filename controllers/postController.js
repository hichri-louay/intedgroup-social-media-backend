const { successResponse, errorResponse } = require('../utils/responseHandler');
const postService = require('../services/postService');

module.exports.createPost = async (req, res) => { 
    try{
        const userId = req.userId;
        const { content } = req.body;
        const newPost = await postService.createPost(userId, content);
        return successResponse(res, newPost, 'Post created successfully', 201);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}
