angular.module('oscars', ['ngRoute', 'ui.bootstrap'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/prenoms.html'
    })

      .when('/shows', {
        templateUrl: 'views/prenoms.html'
      })
    ;
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  })
;