'use strict';

describe('Directive: tab', function () {

  // load the directive's module
  var addTabMock, getSelectedTabMock, allTabs, selectedTab;
  beforeEach(function () {
    module('angularTabsAppInternal');

    selectedTab = {};
    allTabs = [];
    addTabMock = jasmine.createSpy('tabSet.addTab').andCallFake(function (newTab) {
      allTabs.push(newTab);
    });
    getSelectedTabMock = jasmine.createSpy('tabSet.getSelectedTab').andCallFake(function () {
      return selectedTab;
    });
    module(function ($controllerProvider) {
      $controllerProvider.register('TabSetCtrl', function TabSetControllerMock() {
        this.addTab = addTabMock;
        this.getSelectedTab = getSelectedTabMock;
      });
    });
  });

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should add the tab to the TabSetController', inject(function ($compile) {
    element = angular.element('<tab-set><tab title="My Title"></tab></tab-set>');
    element = $compile(element)(scope);
    expect(addTabMock).toHaveBeenCalledWith({
      title: 'My Title',
      element: jasmine.any(Object)
    });
  }));

  it('should transclude the tab\'s content', inject(function ($compile) {
    element = angular.element('<tab-set><tab title="My Title">My Content</tab></tab-set>');
    element = $compile(element)(scope);
    expect(element.find('.tab').text()).toBe('My Content');
  }));

  it('should show only the selected tab', inject(function ($compile) {
    element = angular.element('<tab-set><tab title="My Title">My Content</tab><tab title="My Title2">My Content2</tab></tab-set>');
    element = $compile(element)(scope);
    selectedTab = allTabs[0];

    scope.$digest();

    expect(element.find('.tab:eq(0)').hasClass('ng-hide')).toBe(false);
    expect(element.find('.tab:eq(1)').hasClass('ng-hide')).toBe(true);
  }));
});
