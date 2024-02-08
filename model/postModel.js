const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    Title: {
        type: String,
    },
    Featureimage: {
        type: String,
    }
})

module.exports = mongoose.model("postModel",postSchema);