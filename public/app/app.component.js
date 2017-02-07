(function(){
  'use strict';
  angular.module('app')
    .component('app', {
        templateUrl: '/js/app/app.template.html',
        controller: controller
    });

    function controller(){
    console.log("you're in onInit app.component");
  }
}());

  

