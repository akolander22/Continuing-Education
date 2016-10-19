angular.module('educationApp').controller('LicenseController', function($http,license,$scope,$mdDialog,$mdToast,$window){
  var vm = this;

  vm.license = license;
  console.log(vm.license);

  vm.options = {
    bgColor: '#616161',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#18FFFF',
    textColor: '#eee',
    max: license.hoursReq
  };

  vm.save = function(){
    console.log('license.hours', license.hours);
    console.log('license',license);

    var sendData = {};
    sendData.hoursReq = vm.license.hoursReq;
    sendData.hours = vm.license.hours;
    sendData.duedate = vm.license.duedate;
    sendData.id = vm.license._id;
    console.log(sendData);


    $http.post('/license/editlicense', sendData).then(function(response){
      console.log('attempting to post', sendData);
      $mdToast.show({
          position: "top left",
          template: function(){
            if (response.status == 401){"<md-toast>License Successfully Updated!</md-toast>"}
            else {"<md-toast>There was a problem there...</md-toast>"}
          }
        })
    }, function(response){
      console.log('Fail');
    })
  }



  vm.delete = function(){
    console.log('clicked delete',license._id);

    $http.delete('/license/delete/' + license._id).then(function(response){
    }, function(response){
      console.log('Could not delete');
    })
    $mdToast.show({
        position: "top left",
        template: function(){
          if (response.status == 401){"<md-toast>License Removed</md-toast>"}
          else {"<md-toast>There was a problem there...</md-toast>"}
        }
      })
      // $window.location.href= "/";
    $mdDialog.hide();
  }

})
