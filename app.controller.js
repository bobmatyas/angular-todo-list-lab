"use strict";
function TodoController($scope) {  
  
  const controller = this;
  
  controller.todoList = [
    {task: 'Walk the dog',
    completed: false,
    },
    {task: 'Go to the store',
    completed: true,
    },
    {task: 'Get gas',
    completed: false,
    },
    {task: 'Wash the car',
    completed: false,
    },
  ];

  controller.addTask = function(task) {
    // this function adds a task to the to-do list based on the add task box
    let newTask = {};
    newTask.task = task;
    newTask.completed = false;
    controller.todoList.push(newTask);
    $scope.addTaskValue = null;
  }

  controller.removeTask = function(removed) {    
    // this function removes a task from the to-do list based on clicking the "x" 
    controller.todoList.splice(removed, 1);
  }

  controller.completeTask = function(completed) {
    // this function sets a task to completed based on the user clicking complete
    controller.todoList[completed].completed = true;
  }


}

angular
.module("todoApp")
.controller("TodoController", TodoController);