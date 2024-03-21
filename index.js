#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform operation",
        type: "list",
        name: 'operator',
        choices: ["Addition", "Substraction", "multiplication", "division"] },
]);
if (answer.operator === "Addition") {
    console.log("your answer is", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log("your answer is", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("your answer is", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log("your answer is", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("wrong input Numbers");
}
