;(function() {
  'use strict';
  angular.module('app')
    .controller('WidgetController', WidgetController);
    WidgetController.$inject = ['$http', 'UsersService', 'WidgetService', '$scope']
    function WidgetController($http, UsersService, WidgetService, $scope){
      var vm = this;
      vm.url = 'http://spa.tglrw.com:4000/';
      vm.getWidgets = function(){
        WidgetService.getWidgets()
          .success(function(data){
            vm.widgets = data;
          });
      };
      vm.getWidgets();
      var newWidget = function(widget){
        this.name = widget.name;
        this.price = widget.price;
        this.color = widget.color;
        this.inventory = widget.inventory;
        if(!widget.melts || widget.melts === undefined){
          this.melts = 'false';
        } else if(widget.melts === false){
          this.melts = 'false';
        } else{
          this.melts = true;
        };
      };
        

      vm.addWidget = function(widget){
        var toAdd = new newWidget(widget);
        WidgetService.addWidget(toAdd)
          .success(function(data){
            console.log(data);
            vm.widget={};
            vm.createWidget = false;
            $scope.$broadcast('widget');
          });
      };

       $scope.$on('widget', function(){
          vm.getWidgets();
       });     
    };
})();
      
            

     
      

    