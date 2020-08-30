var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String
})

const surfSiteSchema = new Schema({
    title: String,
    location: String,
    photo: String,
    comments: [commentSchema]

});

module.exports = mongoose.model('SurfSite', surfSiteSchema);