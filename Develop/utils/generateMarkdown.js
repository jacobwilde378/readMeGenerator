// function to generate markdown for README
function generateMarkdown(data) {

    if (data.projectLicense === 'MIT License') {
      let badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (data.projectLicense === 'Apache License') {
      let badgeLink = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if(data.projectLicense === 'GPL License') {
      let badgeLink = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    }


  return `# ${data.projectTitle}
## Description
${data.projectDescription}

## Badges
${badgeLink}

## Languages
${data.projectLanguages}

## Installation
${data.projectInstallation}

## License
${data.projectLicense}

## Contributors
First & Last Name
${data.projectContribution}

## Tests
${data.projectTests}

## Questions
Any questions should be directed to ${data.projectUserName}.

Github Username:  ${data.projectGithubUN}

Email:  ${data.projectEmail}
`;
};

module.exports = generateMarkdown;
