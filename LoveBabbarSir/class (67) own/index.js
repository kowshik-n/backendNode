const express = require("express");
const app = express();
const routing = require("./routes/routesApp");

// Parser
app.use(express.json());

require("dotenv").config();

const dbConnect = require("./config/dbConnect");
dbConnect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Local host started in port number ${PORT}`);
});

// Default route
app.get("/", function (req, res) {
  res.send(`<p>This is a home page</p>`);
});

app.use("/v1", routing);
