// dependencies
var express = require("express"),
  bodyParser = require("body-parser"),
  logger = require("morgan"),
  mongoose = require("mongoose");

// require Article model

var Article = require("./models/Article");

// build express
var app = express();
const PORT = process.env.PORT || 3005;

// bodyparser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// for static content
app.use(express.static("./public"));

// mongodb config

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});

db.once("open", function(){
  console.log("Mongoose connection succesful.");
});

// main route

app.get("/", function(req, res){
  res.sendFile(_dirname + "/public/index.html");
});

// listener
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
