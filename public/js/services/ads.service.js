(function () { 
  'use strict';

  angular.module('app')
    .service('adsService', service)

    service.$inject = ['$http'];

    function service ($http) { 
      this.all = all;
      this.findById = findById;
      this.create = create;
      this.edit = edit;
      this.deleteAd = deleteAd;


      function all() { 
        return $http.get('/api/classifieds')
          .then(response => response.data);
       }

     }

 }());