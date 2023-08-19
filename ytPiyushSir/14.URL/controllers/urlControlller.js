const shortid = require("shortid");
const { URL } = require("../models/urlModels");

async function urlGenerateShortId(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Url is required" });

  const shortids = shortid();

  const response = await URL.create({
    shortId: shortids,
    redirectUrl: body.url,
    visitHistory: [],
  });

  res.status(200).json({
    dataInserted: response,
  });
}

async function redirec(req, res) {
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
}

module.exports = {
  urlGenerateShortId,
  redirec,
};
