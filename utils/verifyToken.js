const jwt = require('jsonwebtoken');


const secretKey = 'your_secret_key_here';

// -----------------------
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
};

passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    // Here, 'payload' is the decoded JWT content.
    // You may want to perform additional checks if needed.
    return done(null, payload.userId);
  })
);



  function verifyToken(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, userId, info) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      if (!userId) {
        return res.status(401).json({ message: 'Token not provided or invalid' });
      }
      req.userId = userId;
      next();
    })(req, res, next);
  }


  

  module.exports = verifyToken