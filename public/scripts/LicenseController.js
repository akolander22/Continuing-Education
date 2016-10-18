angular.module('educationApp').controller('LicenseController', function($http,license,$scope){
  var vm = this;

  vm.license = license;
  console.log(vm.license);

  vm.options = {
    bgColor: '#2C3E50',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#FFAE1A',
    textColor: '#eee',
    max: license.hoursReq
  };

  vm.save = function(){
    console.log('license.hours', license.hours);
    console.log('vm', vm.license.hours);

    var sendData = {};
    sendData.hoursReq = vm.license.hoursReq;
    sendData.hours = vm.license.hours;
    sendData.id = vm.license._id;
    console.log(sendData);
    $http.post('/license/editlicense', sendData).then(function(response){
      console.log('attempting to post', sendData);
    }, function(response){
      console.log('Fail');
    })
  }

})
