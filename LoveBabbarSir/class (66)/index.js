const express = require("express");
const app = express();

const routesTodo = require("./routes/todo");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", routesTodo);

app.listen(PORT, () => {
  console.log("Server started");
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", function (req, res) {
  res.send(`<h1>This is home page</h1>`);
});
