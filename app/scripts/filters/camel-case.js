'use strict';

(function () {

  /* @ngInject */
  function camelCase() {
    return function (input) {
      return 'camelCase filter: ' + input;
    };
  }

  angular
    .module('rocketCatalogAppInternal')
    .filter('camelCase', camelCase);

})();
