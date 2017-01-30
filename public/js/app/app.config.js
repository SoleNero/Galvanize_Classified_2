(function() {
  'use strict';

  angular.module("app")
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    console.log("You're in app.config!");

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    console.log("you're in app.config in config function");
    $stateProvider
    .state({
      name: 'app',
      abstract: true,
      component: 'app',
    });
 }
}());