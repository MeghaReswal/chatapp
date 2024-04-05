const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    userid: String,
    email: String,
    chatid :String,
    messages: {
        type: Array
    },
    sender: String,
    receiver: String,
    timestamp: {
        type: Date,
    }
})


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;