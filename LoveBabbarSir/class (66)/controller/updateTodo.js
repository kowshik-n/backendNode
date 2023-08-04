const TODO = require("../models/Todo");

exports.updateTodo = async function (req, res) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const update = await TODO.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );

    res.status(200).json({
      UpdatedData: update,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      data: "server error",
    });
  }
};
