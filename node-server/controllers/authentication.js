const User = require('../models/user');
const { generateUserToken } = require('../helpers/token-generator');

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // check if the user exist.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).send({
        error: 'User already exist!'
      });
    }

    // create if not exist
    const user$ = new User({ email, password });
    const savedUser = await user$.save();

    if (savedUser) {
      return res.status(200).send({
        token: generateUserToken(savedUser)
      });
    }
  } catch (error) {
    return next(error);
  }
};

const signIn = (req, res, next) => {
  res.send({
    token: generateUserToken(req.user)
  });
};

module.exports = {
  signUp,
  signIn
};
