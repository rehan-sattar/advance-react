const jwt = require('jwt-simple');
const config = require('../config');

module.exports.generateUserToken = user =>
  jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.secret);
