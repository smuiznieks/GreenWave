const db = require('../models');
const axios = require('axios').default;
const BASEURL = 'https://maps.googleapis.com/maps/api/geocode/json';
const ADDRESS = '1600+Amphitheatre+Parkway,+Mountain+View,+CA';
const apiKey = 'AIzaSyBIXD9h0CZgmj4fHAOY87gHHV-xW4ygyYM';
const ADDRESS_NOT_FOUND_ERROR = 'ADDRESS_NOT_FOUND';

module.exports = {
    createLocation: function(req, res) {
        googleSearch(req.body.address)
            .then(latlng => db.Location.create(
                Object.assign({}, req.body, { latlng })
            ))
            .then(event => {
                res.send(event);
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },

    getAllLocations: function(req, res) {
        db.Location.find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    getMyLocations: function(req, res) {
        db.Location.find({ createdBy: req.params.username }).sort({ score: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    getHighestRated: function(req, res) {
        db.Location.find({}).limit(3).sort({ score: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateLocation: function(req, res) {
        db.Location.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Location.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

function googleSearch(address = '1600+Amphitheatre+Parkway,+Mountain+View,+CA') {
    return axios({
        baseURL: BASEURL,
        params: {
            key: apiKey,
            address
        }
    })
    .then(res => {
        let {results} = res.data;
        if( results && results.length ){
            return results[0].geometry.location;
        } else {
            throw ADDRESS_NOT_FOUND_ERROR;
        }
    })
};