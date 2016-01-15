;(function() {
  'use strict';
  angular.module('app')
    .controller('SingleWidgetController', SingleWidgetController);
    SingleWidgetController.$inject = ['$http', 'UsersService', 'WidgetService', '$stateParams']
    function SingleWidgetController($http, UsersService, WidgetService, $stateParams){
      var vm = this;
      vm.url = 'http://spa.tglrw.com:4000/';
      vm.showEditWidget = false;
      vm.getSingleWidget = function(){
        var id = $stateParams.id;
        // console.log(id);
        WidgetService.getSingleWidget(id)
          .success(function(data){
            console.log(data);
            vm.widget = data;
          });
      }

      vm.editWidget = function(widget){
        // console.log(widget);
        WidgetService.updateWidget(widget)
          .success(function(data){
            vm.showEditWidget = false;
        
          })
      }

      vm.getSingleWidget();
    };
})();
      