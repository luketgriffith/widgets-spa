;(function() {
  'use strict';
  angular.module('app')
    .controller('UserController', UserController);
    UserController.$inject = ['$http', 'UsersService', 'WidgetService']
    function UserController($http, UsersService, WidgetService){
      var vm = this;
      vm.getUsers = function(){
        UsersService.getUsers()
          .success(function(data){
            console.log(data);
            vm.users = data;
          })
      }
      vm.getUsers();
      


    };

    
})();