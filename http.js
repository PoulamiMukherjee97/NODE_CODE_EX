const http = require('http');

http.createServer((req,res) => {
    console.log('Request Received');
    if(req.url==="/about"){
        res.end('<h1>This is the abouts page</h1>')
    }else if(req.url==="/contact"){
        res.end('<h1>This is the contact page</h1>')
    }else if(req.url==="/"){
        res.end('<h1>This is the homepage</h1>')
    }
}).listen(3001, () => console.log('Server is running on localhost:3001'));