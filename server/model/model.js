const mongoose = require('mongoose');

var schema = new mongoose.Schema({
	phone: {
		type: String,
		required: true,
		unique: true,
	},
	languages: {
		type: [String],
		required: true,
	},
	gender: String,
});

const Userdb = mongoose.model('user', schema);
module.exports = Userdb;
