function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
![Badge](https://img.shields.io/github/license/${data.username}/${data.repo})
![BadgeGithub](https://img.shields.io/github/followers/${data.username}?style=social)
## Description 
${data.description}
![ScreenShot](${data.screenshot})
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Repository
- [Project Repo](https://api.github.com/users/${data.username})
## GitHub
![Image of me](${githubInfo.githubImage})
##
- [GitHub Profile](${githubInfo.profile})

`;
}

module.exports = generateMarkdown;