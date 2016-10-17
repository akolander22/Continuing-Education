angular.module('educationApp').controller('MyLicensesContoller', function($http,$mdMedia,$mdDialog){
  var vm = this;


  $http.get('/license/mylicenses').then(function(response){
    var licenseList = response.data.license
    vm.myLicenseList = [];
    console.log('license response', licenseList);

    for (var i = 0; i < licenseList.length; i++) {
      vm.myLicenseList.push(licenseList[i]);
    }
    console.log(vm.myLicenseList);

    vm.showLicense = function(license){
      console.log('clicked the button');
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      $mdDialog.show({
        controller: 'LicenseController',
        controllerAs: 'lcs',
        templateUrl: 'views/license.html',
        fullscreen: useFullScreen,
        clickOutsideToClose: true,
        ariaLabel: 'Good',
        locals: {
        license: license
        }
      })

    }

    vm.newLicense = function(){
      console.log('hello');
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      $mdDialog.show({
        controller: 'CreateLicenseController',
        controllerAs: 'create',
        templateUrl: 'views/createlicense.html',
        fullscreen: useFullScreen,
        clickOutsideToClose: true,
        ariaLabel: 'Good',
      })
    }
  }, function(response){
    console.log('Fail to get licenses');
  })




})
