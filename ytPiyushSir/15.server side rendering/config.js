const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = function () {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(function () {
      console.log("Database connection sucess");
    })
    .catch(function (err) {
      console.log("Database connection error", err);
      console.error(err);
      process.exit(1);
    });
};

module.exports = dbConnect;
