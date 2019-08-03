const User = require("../models/user");
const config = require("../config");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// create a local strategy

const localOptions = {
  usernameField: "email"
};

const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    // 1. verify this username ( email in our case ) and  password,
    // 2. call done with user if its the correct user
    // 3. if not then call the done with nothing
    try {
      const user = await User.findOne({ email });
      if (user) {
        user.comparePasswords(password, (err, isMatch) => {
          if (err) return done(err, false);
          if (!isMatch) return done(null, false);
          return done(null, user);
        });
      } else {
      }
    } catch (err) {
      done(err);
    }
  }
);

// create jwt strategy for authorization, private routes
//1. setup the options
const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader("authorization")
};
//2. Create Jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // 1. see if user payload id exist in our database ?
  // 2. if yes then call the `done` method with that.
  // 3. otherwise call `done` without the user object
  try {
    const user = await User.findOne({ _id: payload.sub });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
});

//3. Tell passport to use this strategy

passport.use(jwtLogin);
passport.use(localLogin);
