const Post = require('../models/Post');

const createPost = async (userId, content) => { 
    const newPost = new Post({
        user: userId,
        content
    });
    await newPost.save();
    return newPost;
}


module.exports = { createPost };