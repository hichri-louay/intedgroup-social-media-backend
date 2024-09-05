const Post = require('../models/Post');

const createPost = async (userId, content) => { 
    const newPost = new Post({
        user: userId,
        content
    });
    await newPost.save();
    return newPost;
}

const likePost = async (postId, userId) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    const isLiked = post.likes.includes(userId);
    if (isLiked) {
      post.likes = post.likes.filter(id => id.toString() !== userId.toString());
    } else {
      post.likes.push(userId);
    }
    await post.save();
    return post;
};

const commentPost = async (postId, userId, content) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    const newComment = {
      user: userId,
      content: content
    };
    post.comments.push(newComment);
    await post.save();
    return post;
  };


module.exports = { createPost, likePost, commentPost };