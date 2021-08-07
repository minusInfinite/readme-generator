// TODO: Include packages needed for this application
import inquirer from "inquirer"
import generateMarkdown from "./utils/generateMarkdown.js"
import fs from "fs"
import { type } from "os"

// TODO: Create an array of questions for user input
/** @type {inquirer.QuestionCollection} */
const questions = [
    {
        name: "title",
        message: "Provide the name of your project:",
        type: "input",
    },
    {
        name: "description",
        message: "What does your project do or the solution it provides?",
        type: "input",
        validate(value) {
            if (value.split(" ").length < 10) {
                return "I would suggest something at least longer than 10 words"
            }
            return true
        },
    },
    {
        name: "url",
        message: "Project the GitHub Repository URL:",
        type: "input",
    },
    {
        name: "contentTable",
        message: "Would you like a Table of Contents",
    },
    {
        name: "installation",
        message: "How is your project installed?",
        type: "input",
        default: `Clone the repo\n \`\`\`git clone ${answers.url}.git\`\`\`\n Install packages via NPM\n \`\`\`npm install\`\`\`\n `,
    },
    {
        name: "usage",
        message: "Do you want to include usage examples?",
        type: "confirm",
        default: false,
    },
    {
        name: "examples",
        message:
            "This will open an editor, allowing you to provide your examples",
        type: "editor",
    },
    {
        name: "credits",
        message:
            "Provide any credits or links to third-party resorces required",
        type: "input",
    },
    {
        name: "licence",
        message: "Do you want to include a licence?",
        type: "confirm",
        default: false,
    },
    {
        name: "licenceType",
        message: "Please select the licence you require:",
        type: "list",
        loop: false,
        choices: [
            "MIT license",
            "Apache License 2.0",
            'BSD 3-Clause "New" or "Revised" license',
            'BSD 2-Clause "Simplified" or "FreeBSD" license',
            "GNU General Public License (GPL)",
            'GNU Library or "Lesser" General Public License (LGPL)',
            "Mozilla Public License 2.0",
            "Common Development and Distribution License",
            "Eclipse Public License version 2.0",
        ],
        when(answers) {
            return answers.licence === true
        },
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const userPrompt = () => {
        inquirer.prompt(questions).then((answers) => {
            return JSON.stringify(answers, null, " ")
        })
    }
    userPrompt()
}

// Function call to initialize app
init()
