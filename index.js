#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What task do you want to add to todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
