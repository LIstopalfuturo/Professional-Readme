# Professional README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A command-line interface (CLI) application that dynamically generates professional README.md files for your projects. This tool streamlines the process of creating well-structured documentation by prompting users for project information and automatically generating a formatted README file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository:

2. Follow the interactive prompts to input your project information:
   - Project title
   - Description
   - Installation instructions
   - Usage information
   - Contribution guidelines
   - Test instructions
   - License selection
   - Contact information

3. Once completed, your README.md will be generated in the `output` directory.

## Features

- Interactive command-line interface
- Support for multiple license types (MIT, Apache, GPL, BSD 3-Clause)
- Automatic license badge generation
- Professional markdown formatting
- Input validation
- Organized sections with table of contents
- Contact information section
- Automatic directory creation for output

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Tests

Run the test suite:
```

The project uses Jest for testing. You can add additional tests in the `src/__tests__` directory.

## Questions

For questions and support, please contact:

- GitHub: [LIstopalfuturo](https://github.com/LIstopalfuturo)
- Email: your.email@example.com

## Project Structure

readme-generator/
├── src/
│   ├── index.js          # Main application entry point
│   ├── config/
│   │   └── questions.js  # Prompt configuration
│   ├── utils/
│   │   └── generateMarkdown.js  # Markdown generation utility
│   └── __tests__/        # Test files
├── output/               # Generated README files
└── package.json         # Project dependencies and scripts
```

## Dependencies

- Node.js
- inquirer ^8.2.4 - Interactive command line interface
- Jest (dev) - Testing framework
- ESLint (dev) - Code linting

## Demo

[Click here to watch the demonstration video](https://1drv.ms/v/c/2cebbbbed41529a2/ETZjvUE_oWxChuHbF1w22J0BLLOlA4oKN8aB60IC9Xu8Tg?e=xld07H)