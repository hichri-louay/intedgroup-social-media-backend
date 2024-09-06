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

const deletePost = async (postId, userId) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    if (post.user.toString() !== userId.toString()) {
      throw new Error('Not authorized to delete this post');
    }
    await Post.findByIdAndDelete(postId);
    return post;
};

const updatePost = async (postId, userId, content) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    if (post.user.toString() !== userId.toString()) {
      throw new Error('Not authorized to update this post');
    }
    post.content = content;
    await post.save();
    return post;
  };

const deleteComment = async (postId, commentId, userId) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    const comment = post.comments.id(commentId);
    if (!comment) {
      throw new Error('Comment not found');
    }
    if (comment.user.toString() !== userId.toString()) {
      throw new Error('Not authorized to delete this comment');
    }
    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== commentId.toString()
    );
    await post.save();
    return post;
  };  

  const updateComment = async (postId, commentId, userId, content) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    const comment = post.comments.find(comment => comment._id.toString() === commentId.toString());
    if (!comment) {
      throw new Error('Comment not found');
    }
    if (comment.user.toString() !== userId.toString()) {
      throw new Error('Not authorized to update this comment');
    }
    comment.content = content;
    await post.save();
    return post;
  };


module.exports = { 
    createPost,
    likePost, 
    commentPost, 
    deletePost, 
    updatePost,
    deleteComment,
    updateComment
};