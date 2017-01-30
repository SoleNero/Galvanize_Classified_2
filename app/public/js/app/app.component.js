(function() {
    'use strict';
    angular.module('app')
        .component('appComponent', {
            templateUrl: '/js/app/app.template.html',
            controller: controller
        });
        
        console.log("you're in app.component");
    controller.$inject = ['$http'];

    function controller($http) {
        const vm = this;

        vm.$onInit = onInit;
        
        function onInit() {
          console.log("you're in onInit app.component");
        }
    }

}());