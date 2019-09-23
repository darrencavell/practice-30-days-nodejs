var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  fs.readFile('serve-html.html', (err, data) => {
    if (err)
      throw err;
    console.log('Operation Success');
    res.end(data)
  });
}).listen(3030);