var express = require('express');

console.log(process.env.ENV);

var path = process.env.ENV ? process.env.ENV : '/www';

var app=express();
  app.use('/bower_components',express.static(__dirname + '/bower_components'));
  app.use(express.static(__dirname + path));
  console.log('server started at port 3000');

app.listen(3000);
