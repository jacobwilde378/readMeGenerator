// function to generate markdown for README
function generateMarkdown(data) {
  var badgeLink = ""
  if (data.projectLicense === 'MIT License') {
    var badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (data.projectLicense === 'Apache License') {
    var badgeLink = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.projectLicense === 'GPL License') {
    var badgeLink = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  return `# ${data.projectTitle}
## Description
${data.projectDescription}

## Table of Contents
1. [Badges](#Badges)
2. [Languages/Tools](#Languages/Tools)
3. [Installation](#Installation)
4. [License](#License)
5. [Tests](#Tests)
6. [Questions](#Questions)


## Badges

${badgeLink}  

## Languages/Tools
${data.projectLanguages}

## Installation
${data.projectInstallation}

## License
This project is covered under the following license:  ${data.projectLicense}

## Contributors
${data.projectContribution}

## Tests
${data.projectTests}

## Questions
Any questions should be directed to ${data.projectUserName}.

Github:  https://github.com/${data.projectGithubUN}

Email:  ${data.projectEmail}
`;
};

module.exports = generateMarkdown;
