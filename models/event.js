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

	location:{
		type: String,
		required: true
	},

	description:{
		type: String,
		required: true
	}

});

<<<<<<< HEAD
const Eve = mongoose.model("Event", EventSchema);
module.exports = Eve;
=======
const Event=mongoose.model("Event", EventSchema);
module.exports=Event;
>>>>>>> dd3b35505df01e7310d6c5391ac90a588bcac670
