// TODO: Include packages needed for this application

const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")


// TODO: Create an array of questions for user input
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
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
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
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    const dir = './output';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('README.md successfully generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)

    })
       
}

// Function call to initialize app
init();
