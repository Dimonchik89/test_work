const express = require('express')
const cors = require('cors')
const path = require("path");
require('dotenv').config()
const router = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server start on port: ${PORT}`);
})