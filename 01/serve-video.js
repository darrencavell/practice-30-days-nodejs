var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "video/mp4"
  });
  fs.exists('sungguh_indah_cover_by_andy_ambarita_lkuYfY4w8U4_1080p.mp4', (exists) => {
    if (exists) {
      var rstream = fs.createReadStream('sungguh_indah_cover_by_andy_ambarita_lkuYfY4w8U4_1080p.mp4');
      rstream.pipe(res);
    } else {
      res.send("It's 404");
      res.end();
    }
  })
}).listen(3030);