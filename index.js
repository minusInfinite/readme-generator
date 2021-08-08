// TODO: Include packages needed for this application
import inquirer from "inquirer"
import generateMarkdown from "./utils/generateMarkdown.js"
import fs from "fs"
import util from "util"

// TODO: Create an array of questions for user input
/** @type {inquirer.QuestionCollection} */
const questions = [
    {
        name: "username",
        message: "Provide your Name or Username:",
        type: "input",
        validate(value) {
            if (value === "") {
                return "This is required"
            }
            return true
        },
    },
    {
        name: "title",
        message: "Provide the name of your project:",
        type: "input",
        validate(value) {
            if (value === "") {
                return "This is required"
            }
            return true
        },
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
        validate(value) {
            if (value === "") {
                return "This is required"
            }
            return true
        },
    },
    {
        name: "contentTable",
        message: "Would you like a Table of Contents",
        type: "confirm",
    },
    {
        name: "selTableItems",
        message: "select you table items",
        type: "checkbox",
        choices: [
            {
                name: "Installation",
            },
            {
                name: "Usage",
            },
            {
                name: "Examples",
            },
            {
                name: "Credits",
            },
            {
                name: "Licence",
            },
        ],
        when(answers) {
            return answers.contentTable === true
        },
    },
    {
        name: "installation",
        message: "How is your project installed?",
        type: "editor",
        default(answers) {
            return `\nClone the repo\n\n\`\`\`termnal\ngit clone ${answers.url}.git\n\`\`\`\n\nInstall packages via NPM\n\n \`\`\`termnal\nnpm install\n\`\`\`\n`
        },
    },
    {
        name: "usage",
        message: "Do you want to include usage examples?",
        type: "editor",
        default() {
            return `\nUse the following NPM script\n\n\`\`\`termnal\nnpm start\n\`\`\``
        },
    },
    {
        name: "examples",
        message:
            "This will open an editor, allowing you to provide your examples:",
        type: "editor",
        default() {
            return `\nin Markdown format provide links to a video, image or gif`
        },
        when(answers) {
            return answers.selTableItems.includes("Examples")
        },
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
            "GNU General Public License 3.0 (GPL-3.0)",
        ],
        when(answers) {
            return answers.licence === true
        },
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const makeFile = util.promisify(fs.writeFile)
    makeFile(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    const userPrompt = () => {
        inquirer
            .prompt(questions)
            .then((answers) => {
                writeToFile("README.MD", answers)
            })
            .then(() => console.log("README.md has been created"))
            .catch((err) => console.error(err))
    }
    userPrompt()
}

// Function call to initialize app
init()
