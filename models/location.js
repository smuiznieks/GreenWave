const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const LocSchema= new Schema({

	name:{
		type: String,
		required: true
	}

	address:{
		type: String,
		required: true
	}

	zipcode:{
		type: String,
		required: true
	}
});

const location= mongoose.model("location", LocSchema);
module.exports=location;

