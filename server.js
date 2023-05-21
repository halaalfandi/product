const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5000;
const express = require('express')

require("dotenv").config();

/* Connecting to the database and then starting the server. */

   

mongoose.connect('mongodb://localhost:27017/product', {useNewUrlParser: true});


app.listen(PORT, () => console.log(`the app running on http://localhost:${PORT}`));

 