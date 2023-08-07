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

async function redirec(req, res) {}

async function fetchData(req, res) {}

module.exports = {
  urlGenerateShortId,
  redirec,
  fetchData,
};
