const express = require("express");
const urlRoute = require("./routes/urlRoutes");
const { dbConnection } = require("./config");
const URL = require("./models/urlModel");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

dbConnection(process.env.DATABASE_URL);
app.use(express.json());
app.use("/v1", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
  console.log("SErver started at 8001");
});
