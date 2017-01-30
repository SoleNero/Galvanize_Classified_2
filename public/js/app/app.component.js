(function() {
    'use strict';
    angular.module("app")
        .component("app", {
            templateUrl: 'js/app/app.template.html',
            controller: controller
        });
        console.log("I'm in the app.component");
    controller.$inject = ['$http'];

    function controller($http) {
        const vm = this;

        vm.$onInit = onInit;

        function onInit() {
            
        }
    }

}());