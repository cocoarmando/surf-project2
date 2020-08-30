var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    goodeId: String
});

module.exports = mongoose.model('User', userSchema);