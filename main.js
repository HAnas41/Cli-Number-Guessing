#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("congratulation you guess a correct number.");
}
else {
    console.log("opss you guess wrong number.");
}
