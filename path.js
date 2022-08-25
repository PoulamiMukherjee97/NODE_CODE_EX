// This uses the default path module
const path = require('path');

const filename= __filename;
console.log(filename);

// Extracting the extension from the file name
const extension = path.extname(filename);
console.log(extension);

// Extracting only the file name 
const basename = path.basename(filename);
console.log(basename);