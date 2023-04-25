const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const routes = require('./src/routes/Route');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);

app.listen(3000, () => {
  console.log("⚡ Listening to http://localhost:3000");
});
