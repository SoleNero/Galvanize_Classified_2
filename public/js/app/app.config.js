(function(){
  'use strict';
  angular.module("app")
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    // console.log("you got to config");

    $stateProvider
    .state({
      name: 'app',
      abstract: true,
      component: 'app',
    })
    .state({
      name: 'postsList',
      parent: 'app',
      url: '/',
      component: 'postsList'
    })
    .state({
      name: 'edit',
      parent: 'app',
      url: '/:id/edit',
      component:'edit'
    });

  }
}());