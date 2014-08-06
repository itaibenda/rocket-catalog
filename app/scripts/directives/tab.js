'use strict';

(function () {

  /* @ngInject */
  function tab() {
    return {
      template: '<div class="tab" ng-transclude ng-show="isCurrentTabSelected()"></div>',
      restrict: 'E',
      require: '^tabSet',
      transclude: true,
      replace: true,
      scope: {},
      link: function postLink(scope, element, attr, tabSetCtrl) {
        var currentTab = {
          title: attr.title,
          element: element
        };

        scope.isCurrentTabSelected = function () {
          return tabSetCtrl.getSelectedTab() === currentTab;
        };

        tabSetCtrl.addTab(currentTab);
      }
    };
  }

  angular
    .module('angularTabsAppInternal')
    .directive('tab', tab);
})();
