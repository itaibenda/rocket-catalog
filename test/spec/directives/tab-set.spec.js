'use strict';

describe('Directive: tabSet', function () {

  // load the directive's module
  beforeEach(function () {
    module('angularTabsAppInternal');

    //add your mocks here
  });

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should transclude the content', inject(function ($compile) {
    element = angular.element('<tab-set><div>some content</div></tab-set>');
    element = $compile(element)(scope);
    expect(element.find('.tab-content div').text()).toBe('some content');
  }));

  it('should create a list of titles', inject(function ($compile) {
    element = angular.element('<tab-set></tab-set>');
    element = $compile(element)(scope);

    scope.tabs = [{ title: 'First Tab' }, { title: 'moshe'}];
    scope.$digest();
    expect(element.find('ul.tabs-header li:eq(0)').text()).toBe('First Tab');
    expect(element.find('ul.tabs-header li:eq(1)').text()).toBe('moshe');
  }));

  it('should display a tab by clicking its header', inject(function ($compile) {
    element = angular.element('<tab-set><tab title="Tab 1">My Content</tab><tab title="Tab 2">Content 2</tab></tab-set>');
    element = $compile(element)(scope);

    scope.$digest();

    expect(element.find('.tab.ng-hide').text()).toBe('Content 2');
    element.find('.tabs-header li:eq(1)').click();
    expect(element.find('.tab.ng-hide').text()).toBe('My Content');
  }));
});

describe('Controller: TabSetCtrl', function () {
  var TabSetCtrl, scope, $rootScope;

  // load the directive's module
  beforeEach(function () {
    module('angularTabsAppInternal');

    //add your mocks here
  });

  beforeEach(inject(function ($controller, _$rootScope_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    TabSetCtrl = $controller('TabSetCtrl', {
      $scope: scope
    });
  }));

  it('should expose the tabs', function () {
    expect(scope.tabs).toEqual([]);
  });

  it('should allow to add a tab', function () {
    var newTab = {
      title: 'some title',
      content: 'some content'
    };
    TabSetCtrl.addTab(newTab);
    expect(scope.tabs[0]).toEqual(newTab);
  });

  it('should allow to select a tab', function () {
    var newTab = {
      title: 'some title',
      content: 'some content'
    };
    scope.tabs.push(newTab);
    TabSetCtrl.selectTab(newTab);
    expect(TabSetCtrl.getSelectedTab()).toBe(newTab);
  });

  it('should select the first tab added to the array', function () {
    var newTab = {
      title: 'some title',
      content: 'some content'
    };
    TabSetCtrl.addTab(newTab);
    expect(TabSetCtrl.getSelectedTab()).toEqual(newTab);
  });
});
