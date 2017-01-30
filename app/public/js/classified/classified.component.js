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
        vm.createAd = createAd;
        
        function onInit() { 
        classifiedService.all()
          .then(ads => vm.ads = ads);
          console.log(vm.ads);
       }

       function createAd(ad){
         classifiedService.create(ad)
           .then(ad => {
             vm.ads.push(ad);
             delete vm.ad;
           });
         }

         vm.submit = function () {
          vm.onSubmit({ad: vm.ad});
        };
  }
 }());