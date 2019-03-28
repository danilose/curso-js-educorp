const http = require('http');
const servidor = http.createServer( function( req, res ) {
  let html = '';

  if (req.url == "/") {
    html = `<html><head><title>Teste</title></head><body><p>TESTE do NODE Página Inicial</p></body></html>`;
  } else if (req.url == "/produtos") {
    html = `<html><head><title>Teste</title></head><body><p>TESTE do NODE Página Produtos</p></body></html>`;
  }
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(html);
});

servidor.listen(3000);