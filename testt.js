const readline = require('readline');

function askName(name) {
  if (name) {
    console.log(`hello, ${name}!!!!!!!!!!!!`);
    return;
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('whats ur name? ', (answer) => {
    console.log(`hello, ${answer}!!!!!!!!!!!!`);
    rl.close();
  });
}
const [, , nameArg] = process.argv;
askName(nameArg);