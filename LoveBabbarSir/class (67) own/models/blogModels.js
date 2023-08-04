const mongoose = require("mongoose");

const BLOG = new mongoose.Schema({
  posts: {
    type: String,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  likes: {
    type: Number,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  liked: {
    type: Boolean,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  comments: {
    type: Number,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
});

module.exports = mongoose.model("BLOG", BLOG);
