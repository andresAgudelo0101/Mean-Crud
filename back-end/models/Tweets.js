const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    username:String,
    tweet:String,
    updated: { type: Date, default: Date.now() }
});

const tweetModel = mongoose.model("tweets",tweetSchema);
module.exports = tweetModel;