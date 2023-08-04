const BLOG = require("../models/blogModels");

exports.likes = async function (req, res) {
  try {
    const { posts, comments, liked, likes } = req.body;
    const { id } = req.params;

    if (liked) {
      let a = likes + 1;
      console.log(a, "-098765");
      const response = await BLOG.findByIdAndUpdate(
        { _id: id },
        {
          posts,
          comments,
          likes: a,
        }
      );

      res.status(200).json({
        all_posts: response,
      });
    }
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      all_posts: "server error",
    });
  }
};
