const Generator = require('yeoman-generator');
const fs = require('fs');
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
      .sync('../template/*', {
        cwd: this.templatePath(),
        dot: true
      })
      .forEach(file => {
        const filePath = this.templatePath(file);
        if (statSync(file).isDirectory()) {
          console.log('这是一个文件夹');
        }
        if (statSync(filePath).isFile()) {
          this.fs.copyTpl(
            this.templatePath(filePath),
            this.destinationPath(file),
            { name: this.name }
          );
        }
      });
  }
};
