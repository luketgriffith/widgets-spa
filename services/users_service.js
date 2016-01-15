;(function() {
  'use strict';


  angular.module('app')
    .service('UsersService', UsersService);
      UsersService.$inject = ['$http'];
      function UsersService($http){
        var url = 'http://spa.tglrw.com:4000/';
        this.getUsers = getUsers;
        this.getSingleUser = getSingleUser;

        function getUsers(){
          return $http.get(url + 'users')
        }
        
        function getSingleUser(id){
          return $http.get(url + 'users/' + id)
        }  

      }


})();