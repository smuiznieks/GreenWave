const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const mustBeLoggedIn = require('../mustBeLoggedIn');
const userController = require('../controllers/userController');

// Create new user
router.post('/users', userController.createUser);

// Get current user
router.get('/auth', userController.getUserDetails);

// User authentication
router.post('/auth',passport.authenticate('local'), userController.userLogin);

// User logout
// router.delete('/auth', userController.userLogout);

// this route is just returns an array of strings if the user is logged in
// to demonstrate that we can ensure a user must be logged in to use a route
router.route('/stuff')
  .get(mustBeLoggedIn(), (req, res) => {
    // at this point we can assume the user is logged in. if not, the mustBeLoggedIn middleware would have caught it
    res.json([
      'Bears',
      'Beets',
      'Battlestar Galactica'
    ]);
  }
);

module.exports = router;

