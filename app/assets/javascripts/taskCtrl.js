(function() {
  "use strict";
  angular.module("app").controller("taskCtrl",
    function($scope) {
      // Debug
      window.$scope = $scope;

      // Page Globals
      $scope.tasks = new Array;
      $scope.completed_tasks = new Array;
      $scope.numIncomplete = 0;

      // Function Code
      $scope.getNumIncomplete1 = function (){
        var num_incomplete=0;
        for (var i=0; i < $scope.tasks.length ; i++) 
        {
          if ($scope.tasks[i].completed === false) {
            console.log($scope.tasks[i].completed)
            num_incomplete++;
          }
        }
        return num_incomplete;
      }

      $scope.getNumIncomplete = function (){
        return (($scope.tasks.length)-($scope.completed_tasks.length));
      }

      $scope.setNumIncomplete = function () {
        $scope.numIncomplete = $scope.getNumIncomplete();
      }

      $scope.clearNewTask = function() {
        $scope.newTask = null;
      }

      $scope.addTask = function(task_text) {
        var empty_text = "Cannot be Empty!"
        if (task_text && (task_text !== empty_text))
        {
          $scope.tasks.push({text: task_text, completed: false});
          $scope.clearNewTask();
          $scope.numIncomplete = $scope.getNumIncomplete();
        }
        else {
          $scope.newTask = empty_text;
        }
      }

      $scope.markDone = function(task) {
        var task_index = $scope.tasks.indexOf(task);
        if (!task.completed) {
          task.completed=true;
          if (!$scope.completed_tasks.includes(task_index)) {
            $scope.completed_tasks.push(task_index);
          }
        } else {
          task.completed=false;
          if ($scope.completed_tasks.includes(task_index)) {
            var index = $scope.completed_tasks.indexOf(task_index);
            $scope.completed_tasks.splice(index,1);
          }
        }        
        $scope.setNumIncomplete();
        console.log(task);
        console.log("Number Incomplete: "+ $scope.getNumIncomplete());
      }

      $scope.clearCompleted = function() {
        for (var i = 0 ; i < $scope.completed_tasks.length ; i++) {
          var current_index = $scope.completed_tasks[i];
          $scope.tasks.splice(current_index,1);
        }
        $scope.completed_tasks.length = 0;
        $scope.setNumIncomplete();
      }

      $scope.addTask("Do ToDo Controller");
      $scope.addTask("Loop in Angular");
      $scope.addTask("Something Else");
      $scope.numIncomplete = $scope.getNumIncomplete();

    }
  )
} 
());

// $('li').on('click',function(){

// })
