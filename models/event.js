var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var EventSchema= new Schema({

	EventName:{
		type: String,
		required: true
	}

	Time: {
		type: Number,
		required: true
	}

	EventDate:{
		type: Date,
		default: Date.now
	}

	Location:{
		type: String,
	}
});

var User=mongoose.model("Event",EventSchema);
module.exports=User;