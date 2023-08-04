const BLOG = require("../models/blogModels");

exports.posts = async function (req, res) {
  try {
    const response = BLOG.find({});
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
