const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const routes = require('./routes/Routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);

app.listen(3000, () => {
  console.log("⚡ Listening to http://localhost:3000");
})