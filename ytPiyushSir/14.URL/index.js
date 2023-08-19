const express = require("express");
const { router } = require("./routes/urlRoutes");
const { connectToMongodb } = require("./config");
const app = express();

require("dotenv").config();

const { DATABASE_URL, PORT } = process.env;

connectToMongodb(DATABASE_URL).then(() => {
  console.log("Mongo db connected");
});
app.use(express.json());
app.use("/url", router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is connected`);
});
