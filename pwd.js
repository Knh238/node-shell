module.exports = function() {
  process.stdout.write('prompt >');
  // process.stdin.on('data', (data) => {
  //   const cmd = data.toString().trim();
  //   const cwd = process.cwd();

  //   if(cmd === 'pwd'){
        process.stdout.write(process.cwd());
    // }
    //process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
}
