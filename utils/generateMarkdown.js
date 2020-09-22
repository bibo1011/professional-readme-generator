// function to generate markdown for README
function generateMarkdown(data) { 
  return `# ${data.title}
  ## *Description*
   
  ${data.description}

  ## *Table of Content*
  
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Credits](#Credits)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Test](#Test)

  * [Github](#Github)

  * [Email](#Email)


  ## *Installation*
   
  ${data.installation}

  ## *Usage*
   
  ${data.usage}

  ## *Credits*
   
  ${data.credits}

  ## *License*
   
  ${data.license}

  ## *Badges*

  ![alt text](https://img.shields.io/badge/license-${data.license}-blueviolet?style=for-the-badge&logo=appveyor "license badge")

  ## *Contributing*
   
  ${data.contributing}

  ## *Test*
   
  ${data.test}

  # Contact Info

  ## *Github Username*
   
  https://github.com/${data.github}

  ## *Email* 

   If you have additional questons just hit the link to send email

  mailto:${data.email}
`;
}

module.exports = generateMarkdown;


