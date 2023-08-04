const TODO = require("../models/Todo");

exports.deleteTodo = async function (req, res) {
  try {
    const { id } = req.params;

    const deleteIt = await TODO.deleteOne({ _id: id });

    res.status(200).json({
      data: deleteIt,
      message: `this ${id} has been succesfully deleted`,
    });
  } catch (err) {}
};
