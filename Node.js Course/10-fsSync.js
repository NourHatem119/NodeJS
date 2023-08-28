const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const firstFile = readFileSync('./content/first.txt', 'utf-8');
const secondFile = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/resultSync.txt',
    `Here is the result: ${firstFile}, ${secondFile}`,
    { flag: 'a' });

console.log('done with the task');
console.log('starting the next one');