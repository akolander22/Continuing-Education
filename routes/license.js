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

router.post('/editlicense', function(request,response){
  var data = request.body;
  var id = data.id;
  console.log(data);
  User.findOne({"license._id": id}, function(err, user){
    currentLicense = user.license.id(id);
    console.log(currentLicense);
    currentLicense.hoursReq = data.hoursReq;
    currentLicense.hours = data.hours;
    currentLicense.duedate = data.duedate;
    user.save(function(err){
      if(err){
        console.log(err);
        response.sendStatus(500);
      }else{
        response.sendStatus(200);
      }
    })
  })
})


router.get('/mylicenses', function(request,response){
  var user = request.user;
  response.send(user);
})

router.delete('/delete/:id', function(request,response){
  console.log(request.params);
  // console.log(request.user);

  var user = request.user;
  var id = request.params.id;
  console.log(id);

  User.findById(request.user.id, function(err, user){
    if(err){
      console.log(err);
    }
    user.license.id(id).remove();
    user.save(function(err){
      if(err){
        console.log(err);
      }
    })
  })

})





module.exports = router;
