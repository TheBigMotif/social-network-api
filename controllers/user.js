const { User, Thought } = require("../models");
const moment = require("moment");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .populate("friends")
      .populate("thoughts");
    if (!user) {
      return res.status(404).json({ message: "No user" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  req.body.createdAt = moment().format();
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  req.body.updatedAt = moment().format();
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with provided id" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with provided id" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const addFriend = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with provided id" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const removeFriend = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with provided id!" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
};
