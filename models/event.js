const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const EventSchema= new Schema({

	EventName:{
		type: String,
		required: true
	},

	Time:{
		type: Number,
		required: true
	},

	EventDate:{
		type: Date,
		default: Date.now,
		required: true
	},

	Location:{
		type: String,
		required: true
	}
});

const Eve=mongoose.model("Event", EventSchema);
module.exports=Eve;