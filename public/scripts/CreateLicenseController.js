angular.module('educationApp').controller('CreateLicenseController',['$http','$mdDialog', '$mdMedia', function($http,$mdDialog,$mdMedia,$mdToast){
  var vm = this;

  vm.submit = function(){
    console.log('hit submit', vm.duedate);

    var sendData = {};
    sendData.name = vm.name;
    sendData.number = vm.number;
    sendData.duedate = vm.duedate;
    sendData.hoursReq = vm.hoursReq;
    sendData.hours = vm.hours;
    $mdDialog.hide();
    console.log(sendData);
    $http.post('/license/savelicense', sendData).then(function(response){
      console.log('attempting to post', sendData);
      $mdToast.show({
          position: "top left",
          template: function(){
            if (response.status == 401){"<md-toast>Successfully Created a New License!</md-toast>"}
            else {"<md-toast>There was a problem there...</md-toast>"}
          }
        })
    }, function(response){
      console.log('Fail');
    })
  };



}]);
