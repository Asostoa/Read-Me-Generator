function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
![Badge](https://img.shields.io/github/license/${data.username}/${data.repo})
![BadgeGithub](https://img.shields.io/github/followers/${data.username}?style=social)
![BadgeSize](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
![BadgeSize](https://img.shields.io/github/v/release/${data.username}/${data.repo})
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
![Badge](https://img.shields.io/github/license/${data.username}/${data.repo})
## Repository
- [Project Repo](https://github.com/${data.username}/${data.repo})
## GitHub
![Image of me](${githubInfo.githubImage})
##
- [GitHub Profile](${githubInfo.profile})

`;
}

module.exports = generateMarkdown;