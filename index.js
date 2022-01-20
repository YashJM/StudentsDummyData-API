// Environmental Variables 
const dotenv = require('dotenv');
dotenv.config();

// Server 
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

// Configs (Ports)
const port = process.env.PORT || 5000;

// DB Connection
var connection = require('./database');

var Location = require('./models/locaitons');

app.get('/list', async function (req, res) {
  const result = await Location.find();
  let studentsData = {students: [...result]}
  
  res.send(studentsData);
})
// Server listening
app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port ${port}`)
});
