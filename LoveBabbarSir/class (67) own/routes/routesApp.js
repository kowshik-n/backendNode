const express = require("express");
const routing = express.Router();
const { posts } = require("../controller/posts.js");
const { createPosts } = require("../controller/createPosts.js");
const { likes } = require("../controller/likes.js");
// const { comments } = require("../controller/comments.js");
const { postDelete } = require("../controller/postDelete.js");

routing.get("/posts", posts);
routing.post("/createPosts", createPosts);
routing.delete("/postDelete/:id", postDelete);
routing.put("/likes/:id", likes);
// routing.put("/posts/comments/:id", comments);

module.exports = routing;
