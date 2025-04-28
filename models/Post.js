const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  authorID: Number,
  tags: Array,
});

module.exports = mongoose.model("Post", postSchema);
