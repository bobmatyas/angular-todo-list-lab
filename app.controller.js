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
  }

  function removeTask() {
    // empty remove task function
    // this function will remove a task from the to-do list based on clicking the "x" 
  }

  controller.completeTask = function(completed) {
    controller.todoList[completed].completed = true;
  }


}

// array of objects with name, relation, age [{}]   variable familyMembers


angular
.module("todoApp")
.controller("TodoController", TodoController);