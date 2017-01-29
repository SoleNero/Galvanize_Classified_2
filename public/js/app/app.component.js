(function() {
  'use strict';

  angular.module('app')
    .component('app', {
      controller: controller,
      tampleteUrl: '/js/app/app.tamplete.html'
    });

    controller.$inject= ['$http'];
/* jshint validthis: true */
    function controller($http) { 
      const vm = this;

      vm.$onInit = onInit;

      function onInit() { 
        console.log('Connected to app.component!'); }
     }

  }());