var http = require('http');
var scp = require('scp_lookup');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(scp.lookup(3));
  res.end();
}).listen(8080);