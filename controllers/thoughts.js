const { Thought, User } = require("../models");

const getAllMyThoughts = async (req, res) => {
  try {
    const dbThoughtData = await Thought.find();
    res.json(dbThoughtData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const getSingleThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOne({ _id: req.params.thoughtId });
    if (!dbThoughtData) {
      return res
        .status(404)
        .json({ message: "This thought is not longer valid" });
    }
    res.json(dbThoughtData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  try {
    const dbData = await Thought.create(req.body);
    const dbUserData = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: dbData._id } },
      { new: true }
    );
    console.log(dbUserData);
    res.json({ message: "Thought successfully created!" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const updateThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!dbThoughtData) {
      return res.status(404).json({ message: "No thought with this id!" });
    }
    res.json(dbThoughtData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const deleteThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOneAndRemove({
      _id: req.params.thoughtId,
    });
    const dbUserData = await User.findOneAndUpdate(
      { thoughts: req.params.thoughtId },
      { $pull: { thoughts: req.params.thoughtId } },
      { new: true }
    );
    res.json({ message: "Thought deleted." });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const addReaction = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );
    if (!dbThoughtData) {
      return res.status(404).json({ message: "Doesn't exist." });
    }
    res.json(dbThoughtData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const removeReaction = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );
    if (!dbThoughtData) {
      return res.status(404).json({ message: "Doesn't exist." });
    }
    res.json(dbThoughtData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllMyThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
};
