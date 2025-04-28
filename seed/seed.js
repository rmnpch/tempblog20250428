const mongoose = require("mongoose");
const Author = require("../models/Author");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const authors = require("../data/authors");
const posts = require("../data/posts");
const comments = require("../data/comments");

const uri =
  "mongodb+srv://user1:OyGjpN7zy0uwTq0G@cluster0.u7lfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // use the correct URI
async function seedDatabase() {
  try {
    await mongoose.connect(uri);

    // Clear old data
    await Author.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    // Insert new data
    await Author.insertMany(authors);
    await Post.insertMany(posts);
    await Comment.insertMany(comments);

    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
