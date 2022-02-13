const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: String,
});

module.exports = mongoose.model("post", postSchema);