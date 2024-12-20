const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors({}));
const { faker } = require("@faker-js/faker");

// app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`);
})