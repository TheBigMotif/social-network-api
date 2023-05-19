const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/the-social-network"
);

module.exports = mongoose.connection;

// code obtained from module 18 NOSQL mini project
