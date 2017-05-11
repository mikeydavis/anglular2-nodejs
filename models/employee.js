var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true}
});

module.exports = mongoose.model('Message',schema); //create collection Messages in mongodb