'use strict';

(function () {

  /* @ngInject */
  function MainController($scope, rocketCatalog) {
    this.rockets = rocketCatalog.list();
  }

  angular
    .module('rocketCatalogAppInternal')
    .controller('MainController', MainController);

})();
