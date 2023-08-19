const express = require("express");
const {
  urlGenerateShortId,
  redirec,
} = require("../controllers/urlControlller");

const router = express.Router();

router.post("/post", urlGenerateShortId);

router.post("/:shortIds", redirec);
module.exports = {
  router,
};
