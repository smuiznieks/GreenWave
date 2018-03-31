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
    }
}


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
}