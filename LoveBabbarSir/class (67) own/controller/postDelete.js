const BLOG = require("../models/blogModels");

exports.postDelete = async function (req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await BLOG.deleteOne({ _id: id });

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
