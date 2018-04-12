const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const EventSchema= new Schema({

	title:{
		type: String,
		required: true
	},

	time:{
		type: String,
		required: true
	},
	
	date:{
		type: String,
		required: true
	},

	location:{
		type: String,
		required: true
	},

	description:{
		type: String
	},

	createdBy:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},

	attendees:{
		type: Array,
		default: []
	}

});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
