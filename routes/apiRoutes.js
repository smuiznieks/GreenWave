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

// Get events created by current user
router.get('/events', eventsController.getMyEvents);

router.put('/events/:id', (req, res) => {
   
    // load event by req.params.id
    // if (event.createdBy !== req.user.username) {
    //     return res.status(403).json({message: 'Only event owners may modify their events.'});
    // }
    res.json({message: `Trying to update ${req.params.id}`});
});

// Get locations created by current user
router.get('/locations', locationsController.getMyLocations);

module.exports = router;

