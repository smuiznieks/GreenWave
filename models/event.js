var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var EventSchema= new Schema({

	Event_Name: String,
	Time: String,
	Location: String,
});

var User=mongoose.model("Event",EventSchema);
module.exports=User;