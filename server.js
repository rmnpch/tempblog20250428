const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const Author = require("./models/Author");
const Post = require("./models/Post");
const Comment = require("./models/Comment");

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const uri =
  "mongodb+srv://user1:OyGjpN7zy0uwTq0G@cluster0.u7lfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // use the correct URI

// Connect to MongoDB
async function mongoConnection() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}
mongoConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// Home page - show all posts
app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { message: "Information Technology Blog", posts });
});

// Authors page - show all authors
app.get("/authors", async (req, res) => {
  const authors = await Author.find({});
  res.render("authors", { authors });
});

app.get("/post/create", async (req, res) => {
  res.render("create-post");
});

app.post("/post/create", async (req, res) => {
  const { title, content, author, tags } = req.body;
  const authors = await Author.find({});
  const authorId = authors[author]._id;
  const newPost = new Post({
    title,
    content,
    authorId,
    tags: tags.split(",").map((tag) => tag.trim()),
  });

  try {
    await newPost.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating post");
  }
});

// Single post page
app.get("/post/:id", async (req, res) => {
  const postID = req.params.id;

  try {
    const post = await Post.findById(postID);
    if (!post) return res.status(404).render("not-found");

    const author = await Author.findById(post.authorId);
    const comments = await Comment.find({});
    const commentsFiltered = comments.filter(
      (comment) => comment.postId == postID
    );
    // res.json(post);
    res.render("post", { post, author, comments: commentsFiltered });
  } catch (err) {
    console.error(err);
    res.status(500).render("not-found");
  }
});
// DELETE a user
app.delete("/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id; // Get the post id from the URL params
    const result = await Post.findByIdAndDelete(postId);

    if (!result) {
      return res.status(404).render("not-found");
    }
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).send("Error deleting post");
  }
});

app.get("/author/:id", async (req, res) => {
  const authorID = req.params.id;

  try {
    const author = await Author.findById(authorID);
    if (!author) return res.status(404).render("not-found");

    res.render("author", { author });
  } catch (err) {
    console.error(err);
    res.status(500).render("not-found");
  }
});

app.use((req, res) => {
  res.status(404).render("not-found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
