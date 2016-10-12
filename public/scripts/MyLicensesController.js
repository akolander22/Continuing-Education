angular.module('educationApp').controller('MyLicensesContoller', function($http,$mdMedia,$mdDialog){
  var vm = this;

  vm.addLicense = function() {
    console.log('button pressed');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: 'CreateLicenseController',
      controllerAs: 'create',
      templateUrl: 'views/license.html',
      fullscreen: useFullScreen,
      clickOutsideToClose: true,
      ariaLabel: 'Form',
    })
}


})
