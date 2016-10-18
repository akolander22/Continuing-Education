angular.module('educationApp').controller('LicenseController', function($http,license,$scope){
  var vm = this;

  vm.license = license;
  console.log(vm.license);

  vm.value = license.hours;
  vm.options = {
    bgColor: '#2C3E50',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#FFAE1A',
    textColor: '#eee',
    max: license.hoursReq
  };

  vm.save = function(){
    console.log('clicked save', vm.value);

  }

})
