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
  .when('/failure', {
    templateUrl: 'views/nope.html',
  })


  $locationProvider.html5Mode(true);
})
