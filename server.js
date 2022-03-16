const fs = require("fs");
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/benchmark/:time", (req, res) => {
  console.log("inside time here");
  fs.appendFileSync("./benchmark.csv", req.params.time + ",");
  res.send("Time found");
});

console.log("todo list RESTful API server started on: " + port);
