const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// save hook enccryption for password
UserSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      console.log("Inside the callback for hash");
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const ModelClass = mongoose.model("user", UserSchema);
module.exports = ModelClass;
