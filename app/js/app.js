var todoApp = angular.module('todoApp', [
  'ngRoute',
  'todoControllers'
]);

var low = require('lowdb');
var db = low('db.json');

todoApp.config(['$routeProvider',

function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/index.html',
      controller: 'IndexCtrl'
    }).
    when('/todo', {
      templateUrl: 'views/todo.html',
      controller: 'TodoCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
