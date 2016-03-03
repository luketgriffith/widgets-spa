;(function() {
  'use strict';
  angular.module('app')
    .controller('HomeController', HomeController);
    HomeController.$inject = ['$http', 'UsersService', 'WidgetService']
    function HomeController($http, UsersService, WidgetService){
      var vm = this;
      vm.url = 'https://afternoon-beach-66107.herokuapp.com/';

      vm.getUsers = function(){
        
         UsersService.getUsers() 
          .success(function(data){
            console.log(data);
            vm.users = data;
          });
      }

      vm.getUsers();

      vm.getWidgets = function(){
        WidgetService.getWidgets()
          .success(function(data){
            // console.log(data)
            vm.widgets = data;
          });
      }
      vm.getWidgets();

      vm.searchUsers = function(user){
        alert(user)
      }
      

    };

    
})();