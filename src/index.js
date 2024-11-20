const fs = require('fs').promises;
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./config/questions');

/**
 * Writes README content to file
 * @param {string} fileName - Output file path
 * @param {Object} data - User input data
 * @returns {Promise<void>}
 */
async function writeToFile(fileName, data) {
    try {
        const content = generateMarkdown(data);
        const dir = path.dirname(fileName);
        
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(fileName, content);
        console.log('✅ README.md successfully generated!');
    } catch (error) {
        console.error('❌ Error generating README:', error);
        throw error;
    }
}

/**
 * Initializes the application
 * @returns {Promise<void>}
 */
async function init() {
    try {
        console.log('Welcome to the README Generator! 📝');
        const answers = await inquirer.prompt(questions);
        await writeToFile(path.join(process.cwd(), 'output', 'README.md'), answers);
    } catch (error) {
        console.error('❌ Application error:', error);
        process.exit(1);
    }
}

// Start the application
init(); 