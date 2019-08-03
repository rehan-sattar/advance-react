const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const logger = require("./helpers/logger");
const router = require("./router");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

// ensure index warning
mongoose.set("useCreateIndex", true);
//  Database connection
require("./db");

// middlewares
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

// routes
app.use("/api/user", router);

// starting the application server.
app.listen(port, error => {
  if (error) {
    logger("Error in starting server...");
    return;
  }
  logger("Server starteed on port 8080.");
});
