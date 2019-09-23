var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "audio/mp3"
  });
  fs.exists('YOU ARE RON KENOLY Feat DARLENE ZSCHECH By EydelyWorshipLivingGodChannel.mp3', (exists) => {
    if (exists) {
      var rstream = fs.createReadStream('YOU ARE RON KENOLY Feat DARLENE ZSCHECH By EydelyWorshipLivingGodChannel.mp3');
      rstream.pipe(res);
    } else {
      res.end("It's a 404");
    }
  })
}).listen(3030);