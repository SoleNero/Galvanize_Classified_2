(function() {
    'use strict';
    angular.module('app')
        .component('appComponent', {
            templateUrl: '/js/app/app.template.html',
            controller: controller
        });
        
    controller.$inject = ['$http'];

    function controller($http) {
        const vm = this;

        vm.$onInit = onInit;
        
        function onInit() {
            console.log("I'm in the app.component");
        }
    }

}());