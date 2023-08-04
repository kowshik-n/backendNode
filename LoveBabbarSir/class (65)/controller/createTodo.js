const TODO = require("../models/Todo");

// Define route handler

exports.createTodo = async function (req, res) {
  try {
    const { title, description } = req.body;

    const response = await TODO.create({ title, description });

    res.status(200).json({
      sucess: true,
      data: response,
      message: "Entry created sucessfully",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      data: "Internal server err",
      message: err.message,
    });
  }
};
