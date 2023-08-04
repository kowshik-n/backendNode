const BLOG = require("../models/blogModels");

exports.createPosts = async function (req, res) {
  try {
    const { posts, comments, liked, likes } = req.body;

    const response = BLOG.create({
      posts: posts,
      liked: liked,
      comments: comments,
      likes: likes,
    });
    res.status(200).json({
      all_posts: response,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      all_posts: "server error",
    });
  }
};
