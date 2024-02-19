const mongoose = require("mongoose");

const commentScheme = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }
}, {timestamps: true});

const Comment = mongoose.model("Comment", commentScheme);
module.exports = Comment;