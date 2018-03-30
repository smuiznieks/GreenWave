const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const EventSchema= new Schema({

	eventname:{
		type: String,
		required: true
	},

	time:{
		type: Number,
		required: true
	},

	eventdate:{
		type: Date,
		default: Date.now,
		required: true
	},

	location:{
		type: String,
		required: true
	}
});

const Eve=mongoose.model("Event", EventSchema);
module.exports=Eve;