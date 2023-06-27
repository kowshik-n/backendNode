// const fs = require("fs");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello this is home page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.listen(4000, () => {
  console.log("Server has been started");
});
