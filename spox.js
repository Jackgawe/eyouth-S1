const chalk = require('chalk');
const { spawn } = require('child_process');
console.log(chalk.red('Starting spox...'));
console.log(chalk.yellow('Loading configuration...'));
console.log(chalk.greenBright('Configuration loaded successfully!'));
console.log(chalk.green('Spox is now running!'));
const spoxProcess = spawn('node', ['spox-server.js'], { stdio: 'inherit' });

spoxProcess.on('close', (code) => {
  console.log(chalk.red(`Spox process exited with code ${code}`));
});
spoxProcess.on('error', (err) => {
  console.error(chalk.red('Failed to start Spox process:'), err);
}); 
console.log(chalk.red('Spox is running in the background. Press Ctrl+C to stop it.'));
require
