const mongoose = require("mongoose")

const dbConnect = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/chatapp").then(console.log("db connected"))
    } catch (err) {
        console.log("something went wrong with db connection")
    }

}

module.exports = dbConnect