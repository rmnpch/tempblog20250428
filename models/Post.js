const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: Array,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

module.exports = mongoose.model("Post", postSchema);
