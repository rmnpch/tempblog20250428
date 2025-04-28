const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postID: String,
  author: String,
  content: String,
  date: Date,
});

module.exports = mongoose.model("Comment", commentSchema);
