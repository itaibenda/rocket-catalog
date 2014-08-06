'use strict';

(function () {
  /* @ngInject */
  function TabSetController($scope) {
    $scope.tabs = [];
    var selectedTab;

    this.addTab = function (tab) {
      $scope.tabs.push(tab);

      if (!selectedTab) {
        selectedTab = tab;
      }
    };

    this.selectTab = function (tab) {
      selectedTab = $scope.tabs.filter(function (currentTab) {
        return currentTab === tab;
      })[0];
    };

    this.getSelectedTab = function () {
      return selectedTab;
    };
  }

  /* @ngInject */
  function tabSet() {
    return {
      template: '' +
      '<div>' +
        '<ul class="tabs-header">' +
          '<li ng-repeat="tab in tabs" ng-click="tabSetCtrl.selectTab(tab)">{{tab.title}}</li>' +
        '</ul>' +
        '<div class="tab-content" ng-transclude>' +
        '</div>' +
      '</div>',
      transclude: true,
      replace: true,
      restrict: 'E',
      controller: 'TabSetCtrl',
      controllerAs: 'tabSetCtrl'
    };
  }

  angular
    .module('angularTabsAppInternal')
    .directive('tabSet', tabSet)
    .controller('TabSetCtrl', TabSetController);

})();
