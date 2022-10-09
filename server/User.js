const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userId: String,
    pass: String
})

module.exports = mongoose.model("User", user);
