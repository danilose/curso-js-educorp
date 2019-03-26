const http = require('http')

var dt = require('./meuModulo');

http.createServer( function( req, res ) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('Data atual: ' + dt.myDateTime());
  res.end();
}).listen(3000);