// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.github}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.github}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub commit activity](https://img.shields.io/github/commit-activity/w/${data.username}/${data.repo}?color=purple)


  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  *Steps required to install project and how to get the development environment running:*
  ${data.installation}

  ## Usage
  *Instructions and examples for use:*
  ${data.usage}

  ## Contributing
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  ${data.contributing}

  ## Tests
  *Tests for application and how to run them:*
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  For any questions, please contact me with the information below:
  GitHub: https://github.com/${data.rep}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
