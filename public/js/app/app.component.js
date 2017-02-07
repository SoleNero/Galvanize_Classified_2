(function(){
  'use strict';
  angular.module('app')
    .component('app', {
        templateUrl: '/js/app/app.template.html',
        controller: controller
    });

    function controller(){
    const vm = this;

        vm.$onInit = onInit;
        
        function onInit() {
          console.log("you're in onInit app.component");
        }
  }
}());

  

