angular.module('starter.controllers', [])
 
  .controller('AppCtrl', function($scope) {
 
  })
  .controller('carrosCtrl', function ($rootScope, $stateParams, $scope, carrosService) {
    $scope.textoBusca = "";
 
    $scope.limparBusca = function () {
      $scope.textoBusca = "";
      $scope.carros = carrosService.query();
    }
    $scope.buscar = function () {
      $scope.carros = carrosService.query({filtro: $scope.textoBusca});
    }
 
    $scope.carros = carrosService.query();
  })
 
  .controller('carroCtrl', function($scope, $stateParams, carroService) {
 
    $scope.carro = carroService.show({id: $stateParams.id});
  });

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
