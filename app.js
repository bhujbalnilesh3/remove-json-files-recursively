const path = require('path');
const fs = require('fs');
const config =  require('./config.json');

let files = fs.readdirSync(config.absoulateFolderPathtoDelete, {
    recursive: true,
});

files = files.filter(file => file.endsWith('.json'));
const fileCount = files.length;
files = files.map(file => path.resolve(config.absoulateFolderPathtoDelete, file));
if (config.writeFilenameLogs) {
    fs.writeFileSync(`${config.logFilePath}logs.log`, JSON.stringify(files, undefined, 4));
}

if (config.simulate) {
    return;
}

files.forEach(file => {
    fs.rmSync(file);
});

console.log(`Process completed`);
console.log(`Removed ${fileCount} files from ${config.absoulateFolderPathtoDelete} folder`);
if (config.writeFilenameLogs) {
    console.log(`Check ${config.writeFilenameLogs}logs.log for list of files removed`);
}
