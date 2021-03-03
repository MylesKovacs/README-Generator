function generateREADME(data) {
  return `# ${data.title}
  ## Description

  ${data.description}
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License 

  ${data.license}

  
  `
}

module.exports = generateREADME;