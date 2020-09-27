// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
## Description
${data.projectDescription}

## Languages
${data.projectLanguages}

## Installation
${data.projectInstallation}

## License
${data.projectLicense}

## Contributors
${data.projectContribution}

## Tests
${data.projectTests}
`;
};

module.exports = generateMarkdown;
