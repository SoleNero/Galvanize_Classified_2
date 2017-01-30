(function() {
  'use strict';

  angular
    .module('app')
    .service('classifiedService', service);

   service.$inject = ['$http'];

    function service ($http) { 
      this.all = all;
      // this.findById = findById;
      this.create = create;
      // this.edit = edit;
      // this.deleteAd = deleteAd;


      function all() { 
        return $http.get('/api/classifieds')
          .then(response => response.data); 
       }

      // function findById(id) {
      //   return $http.get(`/api/classifieds/${id}`)
      //   .then(response => {
      //     const ad = response.data;
      //         return ad;
      //       });
      //   }
    
      function create(ad){
        return $http.post('api/classifieds', ad)
          .then(response => {
            response.data.ad = [];
            return response.data;
          });
      }
     }
}());