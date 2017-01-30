(function () { 
  'use strict';
  angular.module('app')
    .component('ads', {
      templateUrl: '/js/ads/ads.template.html',
      controller: controller
    });

    console.log("you're in ads.component");
    // controller.$inject = ['$http'];
    function controller() {
        const vm = this;

        // vm.$onInit = onInit;
        
        // function onInit() {
        //   console.log("you're in onInit ads.component");
        // }
    }


 }());