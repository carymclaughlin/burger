//  The server.js file is where we set up the port the DOM will operate through. 

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + '/assets'));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
