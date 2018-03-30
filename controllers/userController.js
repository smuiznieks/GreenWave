const db = require('../models');
const passport = require('passport');

module.exports = {
    getCurrentUser: function(req, res) {
        // I'm picking only the specific fields its OK for the audience to see publicly
        // never send the whole user object in the response, and only show things it's OK
        // for others to read (like ID, name, email address, etc.)
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
            // let's handle that nicely by redirecting them back to the create screen
            // with that flash message
            if (err.code === 11000) {
                res.status(400).json({
                    message: 'Username already in use.'
                })
            }
            // otherwise, it's some nasty unexpected error, so we'll just send it off to
            // to the next middleware to handle the error.
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
        console.log("PASSPORT AUTHENTICATION");
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
    // userLogout: function(req, res) {
    //     // db.User.delete
    //     req.logout();
    //     req.session.destroy();
    //     res.json({
    //         message: 'You have been logged out.'
    //     });
    // }
};