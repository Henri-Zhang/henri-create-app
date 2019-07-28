const Generator = require('yeoman-generator');
const glob = require('glob');

module.exports = class extends Generator {
  writing() {
    console.log('writing.......');
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
            {}
          );
        }
      });
  }
};
