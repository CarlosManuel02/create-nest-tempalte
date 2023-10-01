#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`\nError: ${error.message}`);
        return false;
    }
    return true;
    
};



const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/CarlosManuel02/nest-tempalte.git ${repoName}`;
const installCommand = `cd ${repoName} && npm install`;

console.log(`Creating new NestJS project in ${repoName}...`);

const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);

console.log('Installing dependencies...');
const installDeps = runCommand(installCommand);
if (!installDeps) process.exit(-1);

console.log('Done!');
console.log(`\nRun the following commands to get started:\n\n\tcd ${repoName}\n\tnpm run start:dev\n\nHappy hacking!`);