var router = require('express').Router();
var User = require('../models/user');
var License = require('../models/license').model;


router.post('/saveLicense', function(request,response){
  console.log('post', request.body);
  console.log('user id', request.user._id);


})









module.exports = router;
