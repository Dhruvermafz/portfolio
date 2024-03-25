const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

/**
 * Fetch profile information
 *
 * @param req
 * @param res
 * @param next
 */
exports.fetchProfile = function (req, res, next) {
  // Require auth

  // Return profile info
  const user = {
    email: req.user.email,
    username: req.user.username,
    description: req.user.description,
  };
  res.send({
    user: user,
  });
};

/**
 * Update profile information
 *
 * @param req
 * @param res
 * @param next
 */
exports.updateProfile = function (req, res, next) {
  // Require auth

  // Get new profile info (user input)
  const username = req.body.username;
  const description = req.body.description;

  // Get user
  const user = req.user;

  Post.updateMany(
    { authorId: user._id },
    { $set: { authorName: username } },
    function (err) {
      if (err) {
        next(err);
      }
    }
  );

  Comment.updateMany(
    { authorId: user._id },
    { $set: { authorName: username } },
    function (err) {
      if (err) {
        next(err);
      }
    }
  );

  // Update user profile
  User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        username: username,
        description: description,
      },
    },
    { new: true },
    function (err, updatedUser) {
      if (err) {
        return next(err);
      }
      // Delete unused properties: _id, password, __v
      updatedUser = updatedUser.toObject();
      delete updatedUser["_id"];
      delete updatedUser["password"];
      delete updatedUser["__v"];
      // Return updated user profile
      res.send({ user: updatedUser });
    }
  );
};

/**
 * Reset password
 *
 * @param req
 * @param res
 * @param next
 */
exports.resetPassword = function (req, res, next) {
  // Require auth

  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const user = req.user;

  // Compare passwords
  user.comparePassword(oldPassword, function (err, isMatch) {
    if (err) {
      return next(err);
    }

    if (!isMatch) {
      return res
        .status(422)
        .send({ message: "You old password is incorrect! Please try again." });
    }

    if (oldPassword === newPassword) {
      return res.status(422).send({
        message: "Your new password must be different from your old password!",
      });
    }

    // Update password
    user.password = newPassword;

    // Save to DB
    user.save(function (err) {
      if (err) {
        return next(err);
      }

      res.json({ message: "You have successfully updated your password." });
    });
  });
};
