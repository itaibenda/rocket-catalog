// Generated on 2014-08-06 using generator-wix-angular 0.1.68
'use strict';

module.exports = function (grunt) {
  var unitTestFiles = [];
  require('./karma.conf.js')({set: function (karmaConf) {
    unitTestFiles = karmaConf.files.filter(function (value) {
      return value.indexOf('bower_component') !== -1;
    });
  }});
  require('wix-gruntfile')(grunt, {
    staging: 'pizza',
    cdnify: 'vm',
    port: 9000,
    preloadModule: 'rocketCatalogAppInternal',
    translationsModule: 'rocketCatalogTranslations',
    unitTestFiles: unitTestFiles,
    protractor: true
  });
};
