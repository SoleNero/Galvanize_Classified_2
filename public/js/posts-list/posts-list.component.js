(function(){
  'use strict';
  angular.module('app')
    .component('postsList', {
      templateUrl:'/js/posts-list/posts-list.template.html',
      controller: controller
    });

    controller.$inject = ['classifiedService'];

    function controller(classifiedService){
      const vm = this;
      
      vm.$onInit = onInit;
      vm.createAd = createAd;

      function onInit(){
        classifiedService.all()
          .then(ads => vm.ads = ads);
      }

      function createAd(){
        classifiedService.create(vm.ad)
          .then(ad => {
            vm.ad = ad;
            vm.ads.push(ad);
            delete vm.ad;
          });
      }
    }
}());