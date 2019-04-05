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
}

// array of objects with name, relation, age [{}]   variable familyMembers


angular
.module("todoApp")
.controller("TodoController", TodoController);