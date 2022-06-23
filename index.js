// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    // Project Title Prompt
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?(Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    // Description of project prompt
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project(Required!)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on the installation process for your project.(Required!)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter instructions on the installation process for your project.');
                return false;
            }
        }
    },
    // Project usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide details on how the project can be used.(Required!)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter details on how the project can be used.');
                return false;
            }
        }
    },
    // Licenses used
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you will use for your project.(Required!)',
        choices: ['CCO', 'GNU', 'MIT', 'SIL', 'no license']
    },
    // Contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'Explain how others can contribute to this project.(Required!)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please explain how others can contribute to this project.');
                return false;
            }
        }
    },
    // Testing prompt
    {
        type: 'input',
        name: 'test',
        message: 'Explain how this project can be tested.(Required!)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please explain how this project can be tested.');
                return false;
            }
        }
    },
    //  Section for instructions on how to be contacted with any questions
    {
        type: 'input',
        name: 'questions',
        message: 'Provide instructions on how someone can ask questions about your project.(Required!)',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please explain how others can contact you with any questions.');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.(Required!)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username.');
                return false;
            }
        }
    },
    // Contact email address
    {
        type: 'input',
        name: 'email',
        message: 'Provide your contact email address.(Required!)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your contact email address.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// function writeToFile(fileName, data) { 
//     fs.writeFile(fileName, data, error => {
//         if(error) {
//             console.log('')
//         }
//     })
// }

// TODO: Create a function to initialize app
function init() {

    return inquirer.prompt(questions)


}

// Function call to initialize app
init()
.then(data => {
    console.log(data);
    return generateMarkdown(data);
})
.then (data => {
    return writeFile('README.md', data)
});
// type: '',
// name: '',
// message: '',