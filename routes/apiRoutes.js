const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const mustBeLoggedIn = require('../mustBeLoggedIn');
const userController = require('../controllers/userController');
const locationsController = require('../controllers/locationsController');
const eventsController = require('../controllers/eventsController');

// Create new user
router.post('/users', userController.createUser);

// Get current user
router.get('/auth', userController.getUserDetails);

// User authentication
router.post('/auth',passport.authenticate('local'), userController.userLogin);

// User logout
router.delete('/auth', userController.userLogout);


// Create new location
router.post('/locations', locationsController.createLocation);

// Create new event
router.post('/events', eventsController.createEvent);

module.exports = router;

