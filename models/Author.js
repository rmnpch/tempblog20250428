const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
  name: String,
  image: String,
  bio: String,
});

const Author = mongoose.model("Author", authorsSchema);

module.exports = Author;
