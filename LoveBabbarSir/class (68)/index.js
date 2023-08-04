const express = require("express");

const app = express();

const port = 3000;

// app.use are used in only middleware functions
//  and can also used  in mapping a routue function (FOR my own ex like component in one variable pointing )

//  Different types of api handling with http methods
//  Syntax =>  app.methods(routes PATH,handler) get,post,put,patch,delete

app.get("/", (req, res) => {
  console.log(req, "User Requests");
  res.send();
});

app.post("/user", (req, res) => {
  res.send("Recieved a post request");
});

app.listen(port, () => {
  console.log("Server started");
});
