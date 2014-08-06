'use strict';

require('../lib/matchers.protractor.js');
var MainPage = require('../pages/main-page.js');

describe('rocketCatalogApp Main Page', function () {
  var mainPage;

  beforeEach(function () {
    mainPage = new MainPage();
    browser.addMockModule('rocketCatalogAppMocks', function () {});
  });

  afterEach(function () {
    browser.removeMockModule('rocketCatalogAppMocks');
  });

  it('should load successfully', function () {
    mainPage.navigate();
    expect(mainPage.getTitle().getText()).toEqual('Rocket Catalog');
  });

  it('should create tab header for each rocket', function () {
    mainPage.navigate();
    expect(mainPage.getTabTitles().count()).toBe(6);
    expect(mainPage.getTabTitles().get(0).getText()).toBe('Qassam2 Short');
    expect(mainPage.getTabTitles().get(1).getText()).toBe('Qassam2 Long');
    expect(mainPage.getTabTitles().get(2).getText()).toBe('Al Quds 2B');
    expect(mainPage.getTabTitles().get(3).getText()).toBe('Al Quds 3B');
    expect(mainPage.getTabTitles().get(4).getText()).toBe('Nazzer 3 Long');
    expect(mainPage.getTabTitles().get(5).getText()).toBe('Nazzer 4');
  });

  it('should render the tab content', function () {
    mainPage.navigate();
    var allTabs = mainPage.getTabs();
    expect(allTabs.get(0)).not.toHaveClass('ng-hide');
    expect(allTabs.get(1)).toHaveClass('ng-hide');
    expect(allTabs.get(2)).toHaveClass('ng-hide');
    expect(allTabs.get(3)).toHaveClass('ng-hide');
    expect(allTabs.get(4)).toHaveClass('ng-hide');
    expect(allTabs.get(5)).toHaveClass('ng-hide');
  });

  it('should allow to select a different tab', function () {
    mainPage.navigate();
    var allTabs = mainPage.getTabs();
    expect(allTabs.get(0)).not.toHaveClass('ng-hide');
    expect(allTabs.get(1)).toHaveClass('ng-hide');

    mainPage.getTabTitles().get(1).cli  ck();

    expect(allTabs.get(0)).toHaveClass('ng-hide');
    expect(allTabs.get(1)).not.toHaveClass('ng-hide');
  });

});
