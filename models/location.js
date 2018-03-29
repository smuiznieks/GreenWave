const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const LocSchema= new Schema({
	location: {
		type:[number],
		index: '2dsphere'
	}
});

LocSchema.index({location:1});

module.exports= mongoose.model('model', LocSchema),