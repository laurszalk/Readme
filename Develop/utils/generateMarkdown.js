const licenseGenerator = require("./licenseGenerator");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// return the license badge
const licenseArr = [
  "MIT License",
  "Apache License 2.0",
  "Eclipse Public License 1.0",
  "GNU General Public License v3.0",
  "Mozilla Public License 2.0",
  "None",
];
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === licenseArr[1]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === licenseArr[2]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === licenseArr[3]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === licenseArr[4]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === licenseArr[5]) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

  ${data.description}

// call the function inside the template literals
// look up syntax for markdown for images
// ![alt text] 
  ## Installation

  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## Questions
  * Github: https://github.com/${data.username}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
