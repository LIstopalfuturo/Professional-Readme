// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache': '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL': '[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };
  
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GPL': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  
  const licenseTexts = {
    'MIT': 'This project is licensed under the MIT License - see the provided link for details.',
    'Apache': 'This project is licensed under the Apache License 2.0 - see the provided link for details.',
    'GPL': 'This project is licensed under the GNU General Public License v3.0 - see the provided link for details.',
    'BSD 3-Clause': 'This project is licensed under the BSD 3-Clause License - see the provided link for details.'
  };

  return `## License
${licenseTexts[license] || 'This project is licensed under the selected license.'}

For more information, please visit: [${license} License](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Ensure all data fields exist with defaults
  const {
    title = '',
    description = '',
    installation = '',
    usage = '',
    contributing = '',
    tests = '',
    license = '',
    email = '',
    github = ''
  } = data;

  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title}

${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${license && license !== 'None' ? '- [License](#license)\n' : ''}- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${licenseSection}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions, please contact me at ${email}.
You can also find me on GitHub: [${github}](https://github.com/${github})
`;
}

module.exports = generateMarkdown;
