const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
let app = express();

const bodyparser = require('body-parser');
const path = require('path');

const User = require('./models/user');


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
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.post('/create-user', function(req,res, next) {
  let user = new User();
  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;

  user.save(function(err) {
    if(err) {
      return next(err);
    };
    res.json('created new user');
  });

});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(3000);
