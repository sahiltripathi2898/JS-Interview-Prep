/*
Input:
const dir = new FileSystem();
dir.createDirectory('prashant');
dir.changeDirectory('root-prashant');
dir.addFile('index.html');
dir.addFile('app.js');
dir.changeDirectory('root');
dir.createDirectory('practice');
dir.changeDirectory('root-practice');
dir.addFile('index.html');
dir.addFile('app.js');
dir.createDirectory('build');
dir.changeDirectory('root-practice-build');
dir.addFile('a.png');
dir.addFile('b.jpg');
dir.deleteFile('a.png');
dir.changeDirectory('root');
dir.deleteDirectory('prashant');
console.log(dir.getRootDirectory());

Output:
{
  "root": {
    "practice": {
      "files": [
        "index.html",
        "app.js"
      ],
      "build": {
        "files": [
          "b.jpg"
        ]
      }
    }
  }
}
*/

/* eslint-disable */

class FileSystem {
  constructor() {
    (this.structure = {
      root: {}
    }),
      (this.currDirectory = this.structure["root"]);
  }
  getRootDirectory() {
    return this.structure;
  }
  createDirectory(directory) {
    this.currDirectory[directory] = {};
  }
  deleteDirectory(directory) {
    delete this.currDirectory[directory];
  }
  changeDirectory(directoryPath) {
    let path = directoryPath.split("-");
    let curr = this.structure;
    for (let key in path) {
      curr = curr[path[key]];
    }
    this.currDirectory = curr;
  }
  addFile(file) {
    if (this.currDirectory["files"]) {
      this.currDirectory["files"] = [file, ...this.currDirectory["files"]];
    } else {
      this.currDirectory["files"] = [file];
    }
  }
  deleteFile(file) {
    if (this.currDirectory["files"]) {
      this.currDirectory["files"] = this.currDirectory["files"].filter(
        (ele) => ele !== file
      );
    }
  }
}