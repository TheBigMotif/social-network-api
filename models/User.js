const { Schema, model } = require("mongoose");

// Define User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 255,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Match to a regex for email validation
      match: [
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "You have to use a valid email address",
      ],
    },
    // Reference to Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // Self-reference to User model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // Enable timestamps
    timestamps: true,
  }
);

// Virtual for getting the count of thoughts
userSchema.virtual("thoughtsCount").get(function () {
  return this.thoughts.length;
});

// Virtual for getting the count of friends
userSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});

// Index on username and email for faster query performance
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

// Create User model from the schema
const User = model("User", userSchema);

// Export User model
module.exports = User;
