var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
	senha: String

});

module.exports = mongoose.model('User', userSchema);