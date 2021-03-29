const mongoose = require("../database/connection");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
      type: String,
      required: true,
      select: false
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
