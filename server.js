const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
let app = express();

const bodyparser = require('body-parser');
const path = require('path');

mongoose.connect('mongodb://root:Queenstech@ds147920.mlab.com:47920/ecommerse', function(err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('connected to db');
  }
})


// Middleare
app.use(morgan('dev'));
app.use(express.static('public'));
// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json());


app.get('/catname', function(req,res) {
  res.json('batman');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(3000);
