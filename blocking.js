// Importing File system module
const fs = require('fs');
//Available in higher versions
// import { fs } from 'fs';

console.log('Program started');
//SYnchronous-Blocking
const data = fs.readFileSync('./sample.txt');
console.log(data.toString());
//Asynchronous-Non Blocking
fs.readFile('./sample.txt', (err, data) => {
    console.log(data.toString());
});
console.log('Program ended');