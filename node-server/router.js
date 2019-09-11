const router = require('express').Router();
const passport = require('passport');
const Authentication = require('./controllers/authentication');
// need to load the created service for jwt.
require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

router.post('/signup', Authentication.signUp);
router.post('/signin', requireSignIn, Authentication.signIn);

module.exports = router;
