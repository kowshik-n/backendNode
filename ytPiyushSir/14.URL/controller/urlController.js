const shortid = require("shortid");
const URL = require("../models/urlModel");

async function generateUrl(req, res) {
  const shortId = shortid();

  const body = req.body;

  if (!body.url) {
    res.status(400).json({
      error: "Data not found  ",
    });
  }

  const response = await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  res.status(200).json({
    data: response,
    id: shortId,
  });
}

async function fetch(req, res) {
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
}

async function analyse(req, res) {
  const shortId = req.params.analyse;
  const result = await URL.findOne({ shortId });
  console.log(result);
  return res.json({
    totalClicks: result.visitHistory.length,
    analyse: result.visitHistory,
  });
}

module.exports = {
  generateUrl,
  fetch,
  analyse,
};
