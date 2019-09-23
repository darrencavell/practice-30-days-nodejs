var http = require('http');

var host = '127.0.0.1';
var port = 3030;

var server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.write('Hello World');
  res.end();
});

server.listen(port, host, (err) => {
  if (err)
    return console.log('Error occured: ' + err);
  console.log('Server is listening on ' + host + ':' + port);
})