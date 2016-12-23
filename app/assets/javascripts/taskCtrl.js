(
  function() {
    "use strict";
    angular.module("app").controller("taskCtrl",
      function($scope) {
        $scope.tasks = [
          "Do ToDo Controller",
          "Loop in Angular",
          "Something Else"
        ]

        $scope.addTask = function(task) {
          $scope.tasks.push(task);
        }
      }
    )
  } 
  ()
);