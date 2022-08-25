const http = require('http');

const getTemplate = (pageName) => {
  return `<html>
    <head>
    <title>Welcome to my first Node js App</title>
    </head>
    <body>
    <nav>
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
    </ul>
    </nav>
    <h1>Welcome to ${pageName} page</h1>
    </body>
    </html>`
}

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  // res.writeHead(200, { 'Content-Type': 'text/html'});
  switch (req.url) {
    case '/':
      res.end(getTemplate('Home'));
      break;
    case '/about':
      res.end(getTemplate('About'));
      break;
    case '/contact':
      res.end(getTemplate('Contact'));
      break;
    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(`[{
        id:1,
        name: 'Poulami Mukherjee',
        type:'Developer'
      }]`);
      break;
    default:
      res.statusCode = 404;
      res.end(getTemplate('404'));
  }
}).listen(3001, () => console.log('Server is running on localhost:3001'));