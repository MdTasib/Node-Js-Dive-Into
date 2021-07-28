const path = require('path');

const myCurrentPath = __filename;

console.log(path.basename(myCurrentPath));
console.log(path.basename(__dirname));
console.log(path.extname(myCurrentPath));
console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute('./path.js'));

// create path
let pathObj = {
  dir: 'user\\local',
  name: 'path',
  ext: '.js'
}

console.log(path.format(pathObj));
console.log(path.join('user', 'local', 'path.js'));
console.log(path.parse(myCurrentPath));