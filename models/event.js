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
		type: String,
		required: true
	},

	attendeeCount:{
		type: Number,
		default: 0
	}

});

const Event=mongoose.model("Event", EventSchema);
module.exports=Event;
