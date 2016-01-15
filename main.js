var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/main.tpl.html'
    })
    .state('root.home',{
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.users', {
      url: '/users',
      templateUrl: 'templates/users.tpl.html',
      controller: 'UserController as vm'
    })
    .state('root.singleUser', {
      url: '/users/:id',
      templateUrl: 'templates/singleUser.tpl.html',
      controller: 'SingleUserController as vm'
    })
    .state('root.widgets', {
      url: '/widgets',
      templateUrl: 'templates/widgets.tpl.html',
      controller: 'WidgetController as vm'
    })
    .state('root.singleWidget', {
      url: '/widgets/:id',
      templateUrl: 'templates/singleWidget.tpl.html',
      controller: 'SingleWidgetController as vm'
    })

});

