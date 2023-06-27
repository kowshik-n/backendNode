const http = require("http");

// Creating server using http module to start server and respond based on the requests

// const myServer = http.createServer((req, res) => {
//   console.log("New req recevied", req);
//   res.end("Hello from server");
// });

// Hosting our server in the a Particular port locally ( http://localhost:8000/ )

// myServer.listen(8000, () => {
//   console.log("Server started");
// });

//

const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const val = `\n${Date.now()}:New request recieved ${req.url}`;

  fs.appendFile("./log.txt", val, (err, data) => {
    // res.end("Hello from server to client");
    // console.log(err, data, "456789");

    // req.url will show us the client required route page in our hosted ports / our website
    switch (req.url) {
      case "/":
        res.end("This is home page");
        break;
      case "/home":
        res.end("This is also home page");
        break;
      case "/kowshik":
        res.end("This is kowshik page");
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server started");
});
