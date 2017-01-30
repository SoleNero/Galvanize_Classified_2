(function () { 
'use strict';

  angular.module('app')
    .component('classified', {
      templateUrl: '/js/classifieds/classified.template.html',
       controller: controller
    });

    controller.$inject = ['$http'];
    function controller ($http) { 
      const vm = this;

      vm.$onInit = onInit;

      function onInit() { 
        console.log("classified controller onInit");
       }

     }
 }());