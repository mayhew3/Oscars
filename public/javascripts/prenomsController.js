angular.module('oscars')
  .controller('prenomsController', ['$log', '$modal', 'PrenomService',
  function($log, $modal, PrenomService) {
    var self = this;

    var prenomList = PrenomService.getPrenomList();
    if (prenomList.length == 0) {
      PrenomService.updatePrenomsList().then(function () {
        self.prenoms = PrenomService.getPrenomList();
        $log.debug("Controller has " + self.prenoms.length + " prenoms.");
      });
    } else {
      self.prenoms = prenomList;
    }

  }
]);