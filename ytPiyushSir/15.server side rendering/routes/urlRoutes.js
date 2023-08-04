const express = require("express");

const router = express.Router();

const { generateUrl, fetch, analyse } = require("../controller/urlController");

router.post("/", generateUrl);

router.get("/:shortId", fetch);

router.get("/user/:analyse", analyse);

module.exports = router;
