// index.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const apiRouter = require("./routes/api");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api", apiRouter);

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log(
    "Timestamp Microservice is listening on port " + listener.address().port
  );
});
