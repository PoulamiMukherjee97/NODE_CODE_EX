const fs = require('fs');
const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('onFileWritten', (filename)=> {
    fs.readFile(filename, (err,data) => {
        if(!err){
            console.log(data.toString())
        }
    })
});

emitter.on('onFileRead', (data) => {
    const filename = 'newFile.txt';
    fs.writeFile(filename, data, (err) => {
        if(!err){
            console.log('File written');
            emitter.emit('onFileWritten', filename)
        }
    })
});

fs.readFile('./example.txt', (err, data) =>{
    if(!err){
        emitter.emit('onFileRead', data.toString());
    }
});