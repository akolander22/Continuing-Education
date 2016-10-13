angular.module('educationApp').controller('MyLicensesContoller', function($http,$mdMedia,$mdDialog){
  var vm = this;

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


})
