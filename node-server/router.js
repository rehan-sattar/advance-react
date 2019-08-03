const router = require("express").Router();
const passport = require("passport");
const Authentication = require("./controllers/authentication");
// need to load the created service for jwt.
require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

router.post("/signup", Authentication.signup);
router.get("/signin", requireSignin, Authentication.signin);

module.exports = router;
