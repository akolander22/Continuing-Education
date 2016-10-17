var router = require('express').Router();
var User = require('../models/user');
var License = require('../models/license').model;


router.post('/savelicense', function(request,response){
  console.log('post', request.body);
  console.log('user id', request.user._id);

  var data = request.body;
  var id = request.user._id;

  var newLicense = new License({
    name: data.name,
    number: data.number,
    duedate: data.duedate,
    hoursReq: data.hoursReq,
    hours: data.hours
  })

  User.findById(id, function(err, user){
      if(err){
        console.log(err);
      };
      console.log('user', user);
      user.license.push(newLicense);
      user.save(function(err){
        if(err){
          console.log(err);
        };
      })
    })
})


router.get('/mylicenses', function(request,response){
  var user = request.user;
  response.send(user);
})







module.exports = router;
