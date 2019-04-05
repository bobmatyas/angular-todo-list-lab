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

  function addTask() {
    // empty add task function
    // this function will add a task to the to-do list based on the add task box
  }

  function removeTask() {
    // empty remove task function
    // this function will remove a task from the to-do list based on clicking the "x" 
  }

  function completeTask() {
    // empty complete task function 
    // this functin sets the tasks completed property to true
  }


}

// array of objects with name, relation, age [{}]   variable familyMembers


angular
.module("todoApp")
.controller("TodoController", TodoController);