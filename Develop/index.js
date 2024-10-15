// TODO: Include packages needed for this application

const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")

fs.writeFile(path.join(__dirname, 'dist', 'README.md'), markdownContent, (err) =>
  err ? console.error(err) : console.log('README.md generated successfully!')
);

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"project name",
        message:"What is the title of your project",
        choices: "title"

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
       type:"list",
       message:"Choose the following license",
       choices:["MIT","Apache"]
     },
   {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     const content=generateMarkdown(data)
    fs.writeFile(fileName,content,(err)=>err?console.error(err):console.log("succes"))
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
