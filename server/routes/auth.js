const express = require("express");

const { verifyToken } = require("../utils/verifyUser.js");
const {
  updateProfile,
  fetchProfile,
  resetPassword,
} = require("../controller/user.js");
const { signup, signin, verifyJwt } = require("../controller/auth.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", verifyToken, signin);
router.put("/update/:userId", verifyToken, updateProfile);
router.get("/:userId", fetchProfile);
module.exports = router;
