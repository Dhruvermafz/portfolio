const fs = require("fs");
const path = require("path");

const userRolesPath = path.join(__dirname, "../data/users.json");
const userRoles = JSON.parse(fs.readFileSync(userRolesPath, "utf-8"));

const checkAdmin = (req, res, next) => {
  const { username } = req.user;
  const user = userRoles.users.find((user) => user.username === username);
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = { checkAdmin };
