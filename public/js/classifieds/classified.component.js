(function () { 
'use strict';

  angular.module('app')
    .component('classified', {
      templateUrl: '/js/classifieds/classified.template.html',
       controller: controller
    });

    controller.$inject = ['adsService'];
    function controller (adsService) { 
      const vm = this;

      vm.$onInit = onInit;

      function onInit() { 
        adsService.all()
          .then(ads => vm.ads = ads);
          console.log(vm.ads);
       }


     }
 }());