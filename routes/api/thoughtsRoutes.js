const express = require("express");
const {
  createThought,
  getAllMyThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughts");

const router = express.Router();

router
  .route("/")
  .post(createThought) // Create a new thought
  .get(getAllMyThoughts); // Get all thoughts

router
  .route("/:thoughtId")
  .get(getSingleThought) // Get a specific thought by ID
  .put(updateThought) // Update a thought by ID
  .delete(deleteThought); // Delete a thought by ID

router.route("/:thoughtId/reactions").post(addReaction); // Add a reaction to a thought

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction); // Remove a reaction from a thought

module.exports = router;
