const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const LocSchema = new Schema({ 
        
        address:{
        	type: String,
        	required: true
        }

        zipcode:{
        	type: String,
        	required:

        }




module.exports= mongoose.model('model', LocSchema),