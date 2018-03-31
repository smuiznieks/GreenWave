const db = require('../models');

module.exports = {
    saveLocation: function(req, res) {
        db.Location.create(req.body)
        .then(event => {
            console.log('Success!');
        })
        .catch(err => {
            console.log(err);
        })
    }
}