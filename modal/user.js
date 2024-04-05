const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    fullname: {
        type: String,
    },
    password: String,
    timestamp: {
        type: Date,
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;