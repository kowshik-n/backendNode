const mongoose = require("mongoose");

// require("dotenv").config();
// mongoose.connect(process.env.DATABASE_URL);

async function dbConnection(urlInp) {
  mongoose.connect(urlInp).then(() => {
    console.log("Db connected");
  });
}

module.exports = {
  dbConnection,
};
