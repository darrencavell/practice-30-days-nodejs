var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/pdf"
  });
  fs.readFile('Sovrin-Protocol-and-Token-White-Paper.pdf', (err, data) => {
    if (err) {
      res.json({
        "status": "error",
        "message": err
      });
    }
    else {
      res.write(data);
      res.end()
    }
  })
}).listen(3030);