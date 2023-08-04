const TODO = require("../models/Todo");

exports.getTodo = async function (req, res) {
  try {
    // const { title, description } = req.body;

    const response = await TODO.find({});

    res.status(201).json({
      sucess: true,
      data: response,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      sucess: false,
      data: "No data found",
    });
  }
};

exports.getTodoById = async function (req, res) {
  try {
    const value = req.params.id;

    const getID = await TODO.findById({ _id: value });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }
    res.status(200).json({
      RequestedId: getID,
    });
    // const response = TODO.findById({ value });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      sucess: false,
      data: "No data found",
    });
  }
};
