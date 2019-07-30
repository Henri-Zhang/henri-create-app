const Generator = require('yeoman-generator');
const glob = require('glob');
const { statSync } = require('fs');
const { basename } = require('path');

module.exports = class extends Generator {
  constructor(opts) {
    super(opts);
    this.name = basename(opts.env.cwd);
  }

  writing() {
    glob
      .sync('**/*', {
        cwd: this.templatePath(),
        dot: true
      })
      .forEach(file => {
        const filePath = this.templatePath(file);
        if (statSync(filePath).isFile()) {
          this.fs.copyTpl(
            this.templatePath(filePath),
            this.destinationPath(file.replace(/^_/, '.')),
            { name: this.name }
          );
        }
      });
  }
};
