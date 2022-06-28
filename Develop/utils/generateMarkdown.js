// TODO: Create a function that returns a license badge based on which license is passed in
renderLicenseBadge = (license) => {
  // If license is chosen:
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Boost Software") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === "GNU LGPLv3") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }

  // If there is no license, chosen return empty string
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (element) => {
  // if license is chosen return the link to the SRC file of the license:
  if (element) {
    return (
      "[Link to the License](../src/" + encodeURIComponent(element) + ".txt)"
    );
  } else {
    // else return empty string
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
  licenseText += license + ": <br />";
  licenseText += renderLicenseLink(license) + "<br />";
  switch (license) {
    case "Apache License 2.0":
      licenseText +=
        "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n";
      break;
    case "Boost Software":
      licenseText +=
        "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      break;
    case "GNU LGPLv3":
      licenseText +=
        "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.";
      break;
    case "MIT License":
      licenseText +=
        "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
    case "Mozilla Public License 2.0":
      licenseText +=
        "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
      break;
    case "The Unlicense":
      licenseText +=
        "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
      break;
    default:
      licenseText += "";
  }
  licenseText += "<br /><br />";
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents

  - [Contributors](#contributors)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  
  ## Contributors
  ${data.contributors}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  ## Questions
  Github Profile: [${data.githubUsername}](https://github.com/${
    data.githubUsername
  })
  Reach me with additional questions via email at ${data.email}

  🏆 
`;
}

module.exports = generateMarkdown;
