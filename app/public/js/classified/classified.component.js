(function () { 
  'use strict';
  angular.module('app')
    .component('classified', {
      templateUrl: '/js/classified/classified.template.html',
      controller: controller
    });


    controller.$inject = ['classifiedService'];
    function controller(classifiedService) {
        const vm = this;

        vm.$onInit = onInit;
        
        function onInit() { 
        classifiedService.all()
          .then(ads => vm.ads = ads);
          console.log(vm.ads);
       }
    }


 }());