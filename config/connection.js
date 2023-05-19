const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/the-social-network"
);

module.exports = mongoose.connection;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/the-social-network",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//       }
//     );

//     console.log("MongoDB connection established successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Stop the process if unable to connect
//   }
// };

// module.exports = connectDB;
