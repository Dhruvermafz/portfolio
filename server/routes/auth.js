const express = require("express");
const {
  signin,
  signup,
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
  createAdmin,
} = require("../controller/auth.js");
const { verifyToken } = require("../utils/verifyUser.js");
const { checkAdmin } = require("../config/checkAdmin.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/create-admin", createAdmin);
router.post("/signin", signin);
router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);
module.exports = router;
