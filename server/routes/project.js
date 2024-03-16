const express = require("express");
const { verifyToken } = require("../utils/verifyUser");
const {
  createProject,
  uploadImages,
  getProject,
  getAllProjects,
  updateProject,
  deleteProject,
  likeProject,
  dislikeProject,
} = require("../controller/project");
const router = express.Router();

router.post("/project/add", verifyToken, createProject);
router.get("/project/getall", getAllProjects);
router.get("/project/:projectId", getProject);
router.put("/project/update/:projectId", verifyToken, updateProject);
router.delete("/project/delete/:projectId", verifyToken, deleteProject);

module.exports = router;
