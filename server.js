var express = require('express');
var passport = require('passport');
var path = require('path');



var app = express();


app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
})







var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
