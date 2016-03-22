var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//only one schema for questions with associated answers to these questions
var UserSchema = new mongoose.Schema({
	address: String,
	username: String,
	email: String,
	number: Number,
	details: String,
	password: String,
	url:String,
	signup_time: {type: Date, default: Date.now },

		
	facebookId: String,
	facebooktoken: String, 
	facebookemail: String, 
	facebookname: String,
	
	aveRating:{type:Number,default:0.0},
	
	appointments: [{ //hiring someone else
		contractor: String, //pulled from scope database
		start_date: String,
		start_time: String,
		end_date: String,
		end_time: String,
		reason: String,
		payment: String,
		directions:{type: String,default:" "},
		paid:{type: Boolean,default:false},
		created_at: { type: Date, default: Date.now }
	}],
	services: [{ //appointments you are doing for someone else
		username: String, //your name
		start_date: String,
		start_time: String,
		end_date: String,
		end_time: String,
		reason: String,
		payment: String,
		directions: String,
		created_at: {type: Date, default: Date.now}
	}],
	resume: [{
		service: String, //categories: cook, gardening, baby-sitting
		details: String
	}],
	reviews: [{
		review: {type:String, default:"Awesome"},
		rating: Number,
		customer:{type:String,default:"😊"},
		created_at: {type: Date, default: Date.now}
	}]
});
mongoose.model('User', UserSchema);