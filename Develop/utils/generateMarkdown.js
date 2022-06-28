// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0")
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
    (https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Boost Software") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
    (https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === "GNU LGPLv3"){
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]
      (https://www.gnu.org/licenses/lgpl-3.0)`
    } else if (license === "MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
      (https://opensource.org/licenses/MIT)`
    } else if (license === "Mozilla"){
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
      (https://opensource.org/licenses/MPL-2.0)`
    } else if (license === "The Unlicense"){
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]
      (http://unlicense.org/)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (element) {
    return '[Link to the License](../src/' + encodeURIComponent(element) + '.txt)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseContent = '';
  licenseContent += license +':<br />';
  licenseContent += renderLicenseLink(license)+'<br />';
  switch(license){
    case 'Apache License 2.0':
    licenseContent += "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. ";
    break;
    case 'Boost Software License 1.0':
    licenseContent += "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution.";
    break;
    case 'GNU Affero General Public License v3.0':
    licenseContent += "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license.";
    break;
    case 'MIT License':
    licenseContent += "A short and simple permissive license with conditions only requiring preservation of copyright and license notices.";
    break;
    case 'Mozilla Public License 2.0':
    licenseContent += "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). ";
    break;
    case 'The Unlicense':
    licenseContent += "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
    break;
    default:
      licenseContent +='';
  }
  return licenseContent;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.usage}
${renderLicenseSection(data)}
# Contributions
​Contributors: ${data.contributions}
# Tests
The following is needed to run tests: ${data.tests}
# Questions
If you have any questions about the repository contact ${data.contributions} directly at : ${data.email}.
`;
}

module.exports = generateMarkdown;
