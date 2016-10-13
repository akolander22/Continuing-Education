angular.module('educationApp').controller('CreateLicenseController',['$http','$mdDialog', '$mdMedia', function($http,$mdDialog,$mdMedia){
  var vm = this;

  vm.submit = function(){
    console.log('hit submit', vm.duedate);

    var sendData = {};
    sendData.name = vm.name;
    sendData.number = vm.number;
    sendData.duedate = vm.duedate;
    sendData.hoursReq = vm.hoursReq;
    sendData.hours = vm.hours;

    console.log(sendData);
    $http.post()
  }



}]);
