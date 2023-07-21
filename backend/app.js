const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const { router } = require('./apis/routes');
require("dotenv").config();
app.use(cors());

app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URL)
app.use('/chart', router)
debugger
app.listen(process.env.PORT, () => {

    console.log(`listen......${process.env.PORT}`)
})
a = 20;
b = 50;

console.log('hello');
