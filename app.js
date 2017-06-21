const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");

var datafile = require("./data.js");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(__dirname + "/public"));

app.get("/index", function(req, res) {
  res.render("index", { databox: datafile.users });
});

app.listen(3000, function() {
  console.log("Successfully started express application!");
});
