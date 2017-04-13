
angular.module('starter.services', ['ngResource'])
 
    .factory('carrosService', function ($resource, apiUrl) {
      return $resource(apiUrl.RETORNA_carros, {}, {
        query: { method: 'GET'}
      })
    })
 
    .factory('carroService', function ($resource, apiUrl) {
      return $resource(apiUrl.RETORNA_carro, {}, {
        show: { method: 'GET' }
      })
    });