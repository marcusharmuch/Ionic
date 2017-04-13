
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
 
  .constant("apiUrl",(function() {
    var resource = 'http://201.131.228.254/appionic/carros/';
    return {
      RETORNA_carros: resource + "api/carros?filter=:filtro",
      RETORNA_carro: resource + "api/carro/:id"
    }
  })())
 
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
 
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
 

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
 

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
 
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
 
   .state('app.carros', {
      url: '/carros',
      views: {
        'menuContent': {
          templateUrl: 'templates/carros.html',
          controller: 'carrosCtrl'
        }
      }
    })
 
  .state('app.carro', {
    url: '/carro/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/carro.html',
        controller: 'carroCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/home');
});