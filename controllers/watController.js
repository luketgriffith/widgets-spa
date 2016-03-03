;(function(){
  angular.module('app')
    .controller('WatController', WatController)
    WatController.$inject = ['$http'];
    function WatController($http){
      var vm = this;
      vm.title = 'Title'
    }








})();