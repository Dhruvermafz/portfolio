const express = require("express");
const {
  createPost,
  getPost,
  getAllPosts,
  updatePost,
  deletePost,
  likeBlog,
  dislikeBlog,
} = require("../controller/post");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

// Create Post
router.post("/create-post", verifyToken, createPost);

// Get a Post by ID
router.get("/get-post/:id", getPost);

// Get All Posts
router.get("/get-all-posts", getAllPosts);

// Update Post by ID
router.put("/update-post/:id", verifyToken, updatePost);

// Delete Post by ID
router.delete("/delete-post/:id", verifyToken, deletePost);

// Like a Post
router.post("/like-post", verifyToken, likeBlog);

// Dislike a Post
router.post("/dislike-post", verifyToken, dislikeBlog);

module.exports = router;
