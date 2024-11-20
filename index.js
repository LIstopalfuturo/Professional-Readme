const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: input => input.trim() !== '' ? true : 'Title is required'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache", "GPL", "BSD 3-Clause", "None"]
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: input => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(input) ? true : 'Please enter a valid email address';
        }
    }
];

async function writeToFile(fileName, data) {
    try {
        const content = generateMarkdown(data);
        const dir = './output';
        
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(fileName, content);
        console.log('README.md successfully generated!');
    } catch (error) {
        console.error('Error generating README:', error);
        throw error;
    }
}

function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("./output/README.md", data);
        });
}

init();
