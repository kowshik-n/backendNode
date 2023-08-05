const express = require("express");
const app = express();
const router = require("./routes/urlRoutes");

app.use(express.json());

require("dotenv").config();

const dbConnect = require("./config");

dbConnect();

app.use("/v1", router);

app.listen(process.env.PORT, () => {
  console.log("Port successfully connected");
});
