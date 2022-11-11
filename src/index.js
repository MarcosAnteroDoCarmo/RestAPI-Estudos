const express = require("express");
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authControllers")(app);
require("./controllers/projectControllers")(app);

app.listen(3000, () => console.log("Running on port 3000.."));
