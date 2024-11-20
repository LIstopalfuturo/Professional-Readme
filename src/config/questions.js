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
        validate: input => input.trim() !== '' ? true : 'Description is required'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
        validate: input => input.trim() !== '' ? true : 'Installation instructions are required'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
        validate: input => input.trim() !== '' ? true : 'Usage information is required'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
        validate: input => input.trim() !== '' ? true : 'Contribution guidelines are required'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
        validate: input => input.trim() !== '' ? true : 'Test instructions are required'
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"]
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
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: input => input.trim() !== '' ? true : 'GitHub username is required'
    }
];

module.exports = questions; 