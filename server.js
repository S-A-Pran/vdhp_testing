const fs = require("fs");
// @ts-ignore
var csv = require("jquery-csv");
var $ = require("jquery");
var sample = "./benchmark.csv";
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/benchmark/:time", (req, res) => {
  console.log("inside time here");
  fs.appendFileSync("./benchmark.csv", req.params.time + ",");
  res.send("appended!");
});

app.get("/csv", (req, res) => {
  // reading from csv

  // const sample = "./data/sample.csv";
  fs.readFile(sample, "UTF-8", (err, fileContent) => {
    if (err) {
      console.log(err);
    }
    csv.toArrays(fileContent, {}, (err, data) => {
      if (err) {
        console.log(err);
      }

      for (let i = 0, len = data.length; i < len; i++) {
        console.log(data[i]);
        res.send(data[i]);
      }
    });
  });
});

app.get("/arrays", (req, res) => {
  const data = $.csv.toArrays(sample);
  console.log(data);
});

app.get("/clear", (req, res) => {
  // const empty = "";
  fs.writeFile("./benchmark.csv", "", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  res.send("cleared!");
});

console.log("todo list RESTful API server started on: " + port);
