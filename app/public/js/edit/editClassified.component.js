(function () { 
  'use strict';
angular.module('app')
  .component('edit', {
    controller: controller,
    templateUrl: '/js/edit/edit-classified.template.html'
  });

  controller.$inject = ['$stateParams', '$state', 'classifiedService'];
    function controller(classifiedService, $state, $stateParams) {
        const vm = this;

        vm.$onInit = onInit;
        vm.editAd = editAd;

        function onInit() { 
          classifiedService.getById($stateParams.id).then(ad => vm.ad = ad);
         }


        function editAd(ad) { 
          classifiedService.edit($stateParams.id, ad)
            .then(() => $state.go('classified'));
         }
    }
 }());