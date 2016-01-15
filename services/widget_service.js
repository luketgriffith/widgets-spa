;(function() {
  'use strict';


  angular.module('app')
    .service('WidgetService', WidgetService);
      WidgetService.$inject = ['$http'];
      function WidgetService($http){
        var url = 'http://spa.tglrw.com:4000/';
        this.getWidgets = getWidgets;
        this.addWidget = addWidget;
        this.getSingleWidget = getSingleWidget;
        this.updateWidget = updateWidget;
        function getWidgets(){
          return $http.get(url + 'widgets');
        }; 

        function addWidget(widget){
          return $http.post(url + 'widgets', widget);
        };
        
        function getSingleWidget(id){
          return $http.get(url + 'widgets/' + id);
        };

        function updateWidget(widget){
          return $http.put(url + 'widgets/' + widget.id, widget);
        };
      };


})();