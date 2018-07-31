module.exports = function(fileName) {
  const fsf = require('fs');

  fsf.readFile(fileName, (err,data) => {
    if (err) {
      throw err;
     } else {
    process.stdout.write(data)
  }});
  process.stdout.write('\nprompt > ');
}