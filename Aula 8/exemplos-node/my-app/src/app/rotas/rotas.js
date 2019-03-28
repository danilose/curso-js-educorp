module.exports = (app) => {
  app.get('/', function(req,res){
    res.end('Sejam Bem Vindos!');
  });
  app.get('/produtos', function(req,res){
    res.end('Listagem de produtos');
  });
  app.get('/produtos/1', function(req,res){
    res.end('Detalhes do produto 1');
  });
}
