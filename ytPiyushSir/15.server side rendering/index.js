const express = require("express");
const { router } = require("./routes/urlRoutes");
const { connectToMongodb } = require("./config");
const { URL } = require("./models/urlModels");
const app = express();

const port = 8001;
connectToMongodb("mongodb://127.0.0.1:27017/final-short").then(() => {
  console.log("Mongo db connected");
});
app.use(express.json());
app.use("/url", router);

app.get("/:shortIds", async (req, res) => {
  const shortId = req.params.shortIds;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectUrl);
});

app.listen(port, () => {
  console.log("Server strted at 8001");
});
