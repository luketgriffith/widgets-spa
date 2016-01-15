;(function() {
  'use strict';
  angular.module('app')
    .controller('SingleUserController', SingleUserController);
    SingleUserController.$inject = ['$http', 'UsersService', 'WidgetService', '$stateParams']
    function SingleUserController($http, UsersService, WidgetService, $stateParams){
      var vm = this;
      vm.getSingleUser = function(){
        var id = $stateParams.id;
        UsersService.getSingleUser(id)
          .success(function(data){
            console.log(data);
            vm.user = data;
          })
      }
      vm.getSingleUser();
      
    };
})();