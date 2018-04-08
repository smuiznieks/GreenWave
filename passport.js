const session = require('express-session');
const cookieparser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models');

// configure Passport.js
module.exports = (app) => {
  app.use(cookieparser());
  app.use(session({
    // this should be changed to something cryptographically secure for production
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // automatically extends the session age on each request
    rolling: true,
    name: 'sid', // don't use the default session cookie name
    // set your options for the session cookie
    cookie: {
      httpOnly: true,
      // the duration in milliseconds that the cookie is valid
      maxAge: 20 * 60 * 1000, // 20 minutes
    }
  }));

  // This tells Passport how or what data to save about a user in the session cookie.
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // This tells Passport how to turn the user ID we serialize in the session cookie
  // back into the actual User record from our Mongo database.
  // Here, we simply find the user with the matching ID and return that.
  // This will cause the User record to be available on each authenticated request via the req.user property.
  passport.deserializeUser(function (userId, done) {
    db.User.findById(userId)
      .then(function (user) {
        done(null, user);
      })
      .catch(function (err) {
        done(err);
      });
  });

  // this tells passport to use the "local" strategy, and configures the strategy
  // with a function that will be called when the user tries to authenticate with
  // a username and password. We simply look the user up, hash the password they
  // provided with the salt from the real password, and compare the results. if
  // the original and current hashes are the same, the user entered the correct password.
  passport.use(new LocalStrategy((username, password, done) => {
    const errorMsg = 'Invalid username or password';
    db.User.findOne({ username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: errorMsg });
        }
        return user.validatePassword(password)
          .then(isMatch => done(null, isMatch ? user : false, isMatch ? null : { message: errorMsg }));
      })
      .catch(done);
  }));

  app.use(passport.initialize());
  app.use(passport.session());
}
