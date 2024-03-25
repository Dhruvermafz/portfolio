const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  dislikePost,
  fetchPost,
  fetchPosts,
  fetchCommentsByPostId,
} = require("../controller/post");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

// Create Post
router.post("/create-post", verifyToken, createPost);

// Get a Post by ID
router.get("/get-post/:id", fetchPost);

// Get All Posts
router.get("/get-all-posts", fetchPosts);

// Update Post by ID
router.put("/update-post/:id", verifyToken, updatePost);

// Delete Post by ID
router.delete("/delete-post/:id", verifyToken, deletePost);

// Like a Post
router.post("/like-post/:id", verifyToken, likePost);

// Dislike a Post
router.post("/dislike-post/:id", verifyToken, dislikePost);

// Fetch Comments for a Post by ID
router.get("/get-comments/:postId", fetchCommentsByPostId);

module.exports = router;
