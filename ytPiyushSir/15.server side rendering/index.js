const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/urlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const dbConnect = require("./config");
const URL = require("./models/urlModels");
dbConnect();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/kowshik", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.use("/v1", router);

app.listen(process.env.PORT, () => {
  console.log("Port successfully connected");
});
