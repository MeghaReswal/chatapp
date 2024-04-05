const express = require("express");
const dbConnect = require("./utils/mongoCon");
const router = require("./routes/index.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect();
});