angular.module('educationApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/logout', {
    templateUrl: 'views/logout.html',
    controller: 'LogoutController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })
  .when('/createlicense', {
    templateUrl: 'views/createlicense.html',
    controller: 'CreateLicenseController',
    controllerAs: 'create'
  })
  .when('/mylicenses', {
    templateUrl: 'views/mylicenses.html',
    controller: 'MyLicensesContoller',
    controllerAs: 'mylicenses'
  })
  .when('/failure', {
    templateUrl: 'views/nope.html',
  })


  $locationProvider.html5Mode(true);
})
