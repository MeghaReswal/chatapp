const express = require("express")
const { chatCreate, getChat } = require("../controller/chat_controller.js")
const { userRegister, userLogin } = require("../controller/user_controller.js")


const router = express.Router()

router.post("/createchat", chatCreate)
router.get("/getchat/:id", getChat)
router.post("/registeruser", userRegister)
router.post("/login", userLogin)


module.exports = router
