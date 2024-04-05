const Chat = require("../modal/chat_modal")
const User = require("../modal/user")


const chatCreate = async (req, res) => {
    try {
        const { sender, recipient, message } = req.body;

        // Validate input data
        if (!sender || !recipient || !message) {
            return res.status(400).json({ success: false, message: "Sender, recipient, and message are required" });
        }

        // Find sender and recipient in the database
        const senderExists = await User.findOne({ email: sender });
        const recipientExists = await User.findOne({ email: recipient });

        // Check if sender and recipient exist
        if (!senderExists || !recipientExists) {
            return res.status(404).json({ success: false, message: "Sender or recipient not found" });
        }

        // Generate chatid based on sender and recipient IDs
        const chatid = [senderExists._id, recipientExists._id].sort().join('_');

        // Check if a chat with the same chatid already exists
        let chat = await Chat.findOne({ chatid });

        // If chat doesn't exist, create a new one
        if (!chat) {
            chat = new Chat({
                chatid,
                participants: [senderExists._id, recipientExists._id],
                messages: [{ sender, message }]
            });
        } else {
            // If chat exists, append the message to the existing chat
            chat.messages.push({ sender, message });
        }

        // Save the chat document
        const finalchat = await chat.save();

        // Return the response
        return res.status(201).json({ success: true, message: "Message sent successfully", chat: finalchat });
    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
};


const getChat = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("id12", id)

        const getChat = await Chat.find({ _id: id });


        res.status(200).json({
            success: true,
            data: getChat,
        });
    } catch (error) {
        console.log("error", error)
    }
};


module.exports = { chatCreate, getChat }