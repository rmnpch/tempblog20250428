const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://user1:OyGjpN7zy0uwTq0G@cluster0.u7lfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

let authors = require("./data/authors");
let Author = require("./models/Author");
let posts = require("./data/posts");
let comments = require("./data/comments");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "Information Technology Blog", posts: posts });
});

app.get("/authors", (req, res) => {
  res.render("authors", { authors: authors });
});

app.get("/post/:id", (req, res) => {
  const postID = parseInt(req.params.id);
  const selectedPost = posts.find((post) => post.id === postID);
  if (!selectedPost) {
    return res.status(404).render("not-found");
  }
  const selectedAuthor = authors.find(
    (author) => author.id === selectedPost.authorId
  );
  let relatedComments = comments.filter(
    (comment) => comment.postId === selectedPost.id
  );
  if (!relatedComments) relatedComments = [];
  res.render("post", {
    post: selectedPost,
    author: selectedAuthor,
    comments: relatedComments,
  });
});

app.get("/author/:id", (req, res) => {
  const authorID = parseInt(req.params.id);
  const selectedAuthor = authors.find((author) => author.id === authorID);
  if (!selectedAuthor) {
    return res.status(404).render("not-found");
  }
  res.render("author", { author: selectedAuthor });
});

app.get("/filter", (req, res) => {
  let id = 1;
  authors = authors.filter((author) => author.id !== id);
  posts = posts.filter((post) =>
    authors.some((author) => author.id === post.authorId)
  );
  comments = comments.filter((comment) =>
    posts.some((post) => post.id === comment.postId)
  );
});

app.use((req, res) => {
  res.status(404).render("not-found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
