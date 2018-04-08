const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const RsvpSchema= new Schema({
	user:{
		type: String,
		required: true
	},
	eventId: {
		type: Schema.Types.ObjectId,
		ref: 'Event'
	}
});

const Rsvp = mongoose.model('Rsvp', RsvpSchema);

module.exports = Rsvp;
