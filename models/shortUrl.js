const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema= new mongoose.Schema({
    //full and short are the names of the columns on or database
    full: {
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);