(function() {
  'use strict';

  angular
    .module('app')
    .service('classifiedService', service);

   service.$inject = ['$http'];


    function service ($http) { 
      this.all = all;
      this.create = create;
      


      function all() { 
        return $http.get('/api/classifieds')
          .then(response => response.data); 
       }

    
      function create(ad){
        return $http.post('api/classifieds', ad)
          .then(response => {
            response.data.ad = {};
            console.log(response.data)
            return response.data;
          });
      }
     }
}());
