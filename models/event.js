const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const EventSchema= new Schema({

	title:{
		type: String,
		required: true
	},

	time:{
		type: Number,
		required: true
	},
	

	date:{
		type: Number,
		required: true
	},


	location:{
		type: String,
		required: true
	},


	description:{
		type: String
	}

});

const Event=mongoose.model("Event", EventSchema);
module.exports=Event;
