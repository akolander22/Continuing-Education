angular.module('educationApp').controller('LicenseController', function($http,license){
  var vm = this;

  vm.license = license;
  console.log(vm.license);



})
