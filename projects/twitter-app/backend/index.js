const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const routes = require('./src/routes/Route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/', routes);

app.listen(3000, () => {
  console.log("⚡ Listening to http://localhost:3000");
})