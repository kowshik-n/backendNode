const express = require("express");
const {
  fetchData,
  urlGenerateShortId,
  redirec,
} = require("../controllers/urlControlller");

const router = express.Router();

router.get("/", fetchData);

router.post("/post", urlGenerateShortId);

router.post("/red", redirec);
module.exports = {
  router,
};
