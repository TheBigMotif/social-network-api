const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user");

const router = express.Router();

router
  .route("/")
  .post(createUser) // Create a new user
  .get(getUsers); // Get all users

router
  .route("/:userId")
  .get(getUserById) // Get a specific user by ID
  .put(updateUser) // Update a user by ID
  .delete(deleteUser); // Delete a user by ID

router
  .route("/:userId/friends/:friendId")
  .post(addFriend) // Add a friend for a specific user
  .delete(removeFriend); // Remove a friend from a specific user

module.exports = router;
