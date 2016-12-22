(
  function() {
    "use strict";
    angular.module("app").controller("taskCtrl",
      function($scope) {
        $scope.task1 = "Do ToDo Controller";
        $scope.task2 = "Loop in Angular";
        $scope.task3 = "Something Else";
      }
    )
  } 
  ()
);