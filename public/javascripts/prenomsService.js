function PrenomService($log, $http) {
  var prenoms = [];

  this.updatePrenomsList = function() {
    return $http.get('/prenomList').then(function (response) {
      $log.debug("Prenoms returned " + response.data.length + " items.");
      prenoms = response.data;
    }, function (errResponse) {
      console.error('Error while fetching prenoms list: ' + errResponse);
    });
  };

  this.getPrenomList = function() {
    return prenoms;
  };

}

angular.module('oscars')
  .service('PrenomService', ['$log', '$http', PrenomService]);