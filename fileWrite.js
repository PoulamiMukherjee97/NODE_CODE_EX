const fs = require('fs');

const data = 'This is my text hulaa.';
console.log('Program started');

fs.writeFile('example.txt', data, (err) => {
    if(!err){
        console.log('File written');
    }else{
        console.log('Error occured', err);
    }
});

console.log('Program ended');