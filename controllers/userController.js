const db = require('../models');
const passport = require('passport');

module.exports = {
    getCurrentUser: function(req, res) {
        const { id, username } = req.user;
        res.json({
            id, username
        });
    },
    
    // Create a new user
    createUser: function(req, res, next) {
        db.User.create(req.body)
        .then(user => {
            const { id, username } = user;
            res.json({
                id, username
            });
        })
        .catch(err => {
            // if this error code is thrown, that means the username already exists.
            if (err.code === 11000) {
                res.status(400).json({
                    message: 'Username already in use.'
                })
            }
            next(err);
        })
    },

    // Get current user
    getUserDetails: function(req, res) {
        if (!req.user) {
            return res.status(401).json({
                message: 'You are not currently logged in.'
            })
        }
        const { id, username } = req.user;
        res.json({
            id, username
        });
    },

    // User authentication
    userLogin: function (req, res) {
        //passport.authenticate('local');
        if (!req.user) {
            return res.status(401).json({
                message: 'Invalid username or password.'
            })
        }
        const { id, username } = req.user;
        res.json({
            id, username
        });
    },

    // User logout
    userLogout: function(req, res) {
        req.logout();
        req.session.destroy();
        res.json({
            message: 'You have been logged out.'
        });
    },

    updateRsvp: function(req, res) {
        db.User.update({_id: req.params.userId}, { $push: { upcomingEvents: req.body.eventId }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    getUpcomingEvents: function(req, res) {
        db.User.findOne({_id: req.params.userId}).populate('upcomingEvents')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    removeRSVP: function(req, res) {
        db.User.update({_id: req.params.userId}, { $pull: { upcomingEvents: req.body.eventId }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};