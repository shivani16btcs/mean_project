var mongoose = require('mongoose');

var uploadpostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }
})

var uploadpost = mongoose.model('uploadpost', uploadpostSchema);

module.exports = uploadpost;
