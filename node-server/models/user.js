const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// save hook encryption for password
UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePasswords = function(candidatePassword, callback) {
  /**
   * @compare use to compare two passwords.
   * @params
   *  ->  @candidatePassword -> plane password, compare with hash it.
   *  ->  @hashedPassword -> Users encrypted password, read from database.
   * @return @method callback(@param err, @param matchedFlag);
   */

  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err, false);
    if (isMatch) return callback(null, isMatch);
    else return callback(null, isMatch);
  });
};

const ModelClass = mongoose.model('user', UserSchema);
module.exports = ModelClass;
