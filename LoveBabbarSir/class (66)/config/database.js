const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = function () {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(function () {
      console.log("DB connection successfull");
    })
    .catch(function (err) {
      console.log(err, "err occures");
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
