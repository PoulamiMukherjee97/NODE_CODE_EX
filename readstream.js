const fs=require('fs');

const readStream = fs.createReadStream('dummyText.txt', 'utf8');

readStream.on('data', (data) => {
    console.log("New Stream");
    console.log(data);
});

readStream.on('end', () => {
    console.log('ALL ARRIVED')
});
readStream.on('error', (err) => {
    console.log('Error', err);
});