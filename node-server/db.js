const mongoose = require("mongoose");
const logger = require("./helpers/logger");

mongoose.connect(
  "mongodb://localhost:27017/auth",
  { useNewUrlParser: true },
  err => {
    if (err) {
      logger("Error while connection");
      return;
    }
    logger("Database Connected successfully");
  }
);
