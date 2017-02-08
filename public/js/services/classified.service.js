(function(){
  'use strict';
  angular.module('app')
    .service('postsService', service);

    service.$inject = ['$http', '$state', '$stateParams'];

    function service($http, $state, $stateParams){
      // console.log("you got to service");
      
      this.all = all;
      this.create = create;
      this.getById = getById;
      this.edit = edit;
      this.del = del;

      function all(){
        return $http.get('/classifieds')
          .then(response => response.data);
      }

      function getById(id){
        return $http.get(`/classifieds/${id}`)
          .then(response => {
            const id = response.data;
              return response.data;
          });
      }

      function create(ad){
        return $http.post('/classifieds', ad)
          .then(response => {
            response.data.ad = {};
              return response.data;
          });
      }

      function edit(id, ad){
        return $http.patch(`/classifieds/${id}`, ad)
          .then(response => {
              return response.data;
          });
      }
      
      function del(){
        return $http.delete(`/classifieds/${$stateParams.id}`)
          .then(response => response.data);
      }

    }
}());


// Display all of the ads
// Post a new ad
// Edit existing ads
// Delete an ad
// Filter ads (titles and descriptions)
// Sort ads based on posting date and price