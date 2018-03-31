var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	address: {
		type: String,
        required: true,
        unique: true
	},
	zipcode: {
		type: String,
		required: true
    },
    category: {
        type: String,
        // required: true
    },
    score: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: String,
        // required: true
    }
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;

