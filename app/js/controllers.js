var todoControllers = angular.module('todoControllers', []);

todoControllers

.controller('IndexCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams){
    $scope.tasks = db('todo').cloneDeep();
    $scope.my_task = null;

    $scope.removeTask = function(task){
      var query = {name: task.name, description: task.description, done: task.done};
      db('todo').remove(query);
      $scope.tasks = db('todo').cloneDeep();
    };

    $scope.viewTask = function(task){
      $scope.my_task = task;
      $("#modalView").modal();
    };
  }
])

.controller('TodoCtrl', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location){
    $scope.task = {
      'name': '',
      'description': '',
      'done': false
    };

    $scope.newTask = function(){
      var t = $scope.task;
      var data = {name: t.name, description: t.description, done: t.done};
      db('todo').push(data);
      $location.path("/");
    };
  }
]);
