;(function() {
  'use strict';


  angular.module('app')
    .service('UsersService', UsersService);
      UsersService.$inject = ['$http'];
      function UsersService($http){
        var url = 'https://afternoon-beach-66107.herokuapp.com/';
        this.getUsers = getUsers;
        this.getSingleUser = getSingleUser;

        function getUsers(){
          return $http.get('/users')
        }
        
        function getSingleUser(id){
          return $http.get(url + 'users/' + id)
        }  

      }


})();