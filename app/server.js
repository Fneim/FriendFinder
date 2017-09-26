var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port);
