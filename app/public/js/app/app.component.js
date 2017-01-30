(function () { 
  'use strict';
  angular.module('app')

  .component('app', {
    template: "<h1>You're in app.component!</h1>",
    controller: controller
  });

  function controller() {  
    const vm = this;

    vm.$onInit = onInit;

    function onInit() {  
      console.log("you're in app.component onInit function");
    }
  }
 }());