var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	title: {
		type: String,
		required: true
    },
    latlng: {
        type: Object
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
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: String,
        required: true
    }
});



const location= mongoose.model("location", LocationSchema);
module.exports=location;


