const posts = require("express").Router();

const {
  getAllposts,
  getpost,
  addpost,
  updatepost,
  deletepost,
} = require("../queries/posts");

posts.get("/", getAllposts); //  Get all posts.
posts.get("/:id", getpost); //Get single post.
posts.post("/", addpost);
posts.patch("/:id", updatepost); //Update single post.
posts.delete("/:id", deletepost); //Delete single post.
module.exports = posts;
