(function() {
  "use strict";
  angular.module("app").controller("taskCtrl",
    function($scope) {
      // Debug
      window.$scope = $scope;

      // Page Globals
      $scope.tasks = new Array;
      $scope.completedTasks = new Array;
      $scope.visibleTasks = new Array;
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
        return (($scope.tasks.length)-($scope.completedTasks.length));
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
          if (!$scope.completedTasks.includes(task_index)) {
            $scope.completedTasks.push(task_index);
          }
        } else {
          task.completed=false;
          if ($scope.completedTasks.includes(task_index)) {
            var index = $scope.completedTasks.indexOf(task_index);
            $scope.completedTasks.splice(index,1);
          }
        }        
        $scope.setNumIncomplete();
        console.log(task);
        console.log("Number Incomplete: "+ $scope.getNumIncomplete());
      }

      $scope.clearCompleted = function() {
        for (var i = 0 ; i < $scope.completedTasks.length ; i++) {
          var current_index = $scope.completedTasks[i];
          $scope.tasks.splice(current_index,1);
        }
        $scope.completedTasks.length = 0;
        $scope.setNumIncomplete();
      }

      $scope.clearCompletedFromArray = function(array) {
        var completed_tasks = $scope.completedTasks;
        for (var i = 0 ; i < completed_tasks.length ; i++) {
          var current_index = completed_tasks[i];
          array.splice(current_index,1);
        }
        return array;
      }

      $scope.showCompletedTasks = function() {
        var completed_tasks = new Array;
        for (var i = 0 ; i < $scope.tasks.length ; i++) {
          if ($scope.tasks[i].completed) {
            completed_tasks.push($scope.tasks[i]);
          }
        }
        $scope.visibleTasks = completed_tasks;
      }

      $scope.showIncompleteTasks = function() {
        var incomplete_tasks = $scope.tasks.slice();
        incomplete_tasks = $scope.clearCompletedFromArray(incomplete_tasks);
        $scope.visibleTasks = incomplete_tasks;
      }

      $scope.showAllTasks = function() {
        var all_tasks = $scope.tasks.slice();
        $scope.visibleTasks = all_tasks;
      }

      $scope.addTask("Do ToDo Controller");
      $scope.addTask("Loop in Angular");
      $scope.addTask("Something Else");
      $scope.showAllTasks();
      $scope.numIncomplete = $scope.getNumIncomplete();
    }
  )
} 
());

$("#filter_list ul li").on('hover',function(){
  $(this).css("border-style", "solid");
  $(this).css("border-color", "red");
})
