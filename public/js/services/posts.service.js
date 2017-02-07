(function(){
  'use strict';
  angular.module('app')
    .service('postsService', service);

    service.$inject = ['$http', '$state', '$stateParams'];

    function service($http, $state, $stateParams){
      console.log("you got to service");
    }
}());