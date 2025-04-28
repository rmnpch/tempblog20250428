const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: String,
  content: String,
  date: Date,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

module.exports = mongoose.model("Comment", commentSchema);
