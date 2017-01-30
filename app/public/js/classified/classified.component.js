(function () { 
  'use strict';
  angular.module('app')
    .component('classified', {
      templateUrl: '/js/classified/classified.template.html',
      controller: controller
    });

    console.log("you're in classified.component");
    // controller.$inject = ['$http'];
    function controller() {
        const vm = this;

        // vm.$onInit = onInit;
        
        // function onInit() {
        //   console.log("you're in onInit ads.component");
        // }
    }


 }());