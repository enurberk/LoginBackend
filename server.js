const express = require('express');
const keys = require('./Config/keys.js');
const app = express();
const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false}));

//setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mogoURI);

//setup DB models
require('./model/Account');

//setup the routes
require('./routes/authenticationRoutes')(app);

app.listen(keys.port, () => {
    console.log("Listining on " + keys.port);
});