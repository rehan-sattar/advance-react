const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./helpers/logger');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// ensure index warning
mongoose.set('useCreateIndex', true);
//  Database connection
require('./db');

// middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// routes
app.use('/api/user', router);

// starting the application server.
const port = process.env.PORT || 8080;
app.listen(port, error => {
  if (error) {
    logger('Error in starting server...');
    return;
  }
  logger('Server starteed on port 8080.');
});
