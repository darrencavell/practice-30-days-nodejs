var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  let json = {
    status: 200,
    message: 'Successful',
    result: [
      'sunday',
      'monday',
      'tuesday'
    ]
  }
  res.end(JSON.stringify(json));
}).listen(3030);