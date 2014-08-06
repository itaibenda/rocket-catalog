'use strict';

function MainPage() {
  this.navigate = function () {
    browser.get('/');
  };

  this.getTitle = function () {
    return $('h3');
  };

  this.getTabTitles = function () {
    return $$('.tabs-header li');
  };

  this.getTabContent = function () {
    return $('.tab-content');
  };

  this.getTabs = function () {
    return this.getTabContent().$$('.tab');
  };

  this.getVisibleTabDetails = function () {
    return $$('.tab:not(.ng-hide) .details');
  };
}

module.exports = MainPage;
