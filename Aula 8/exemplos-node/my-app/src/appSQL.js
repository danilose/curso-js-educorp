const express = require('express');
const app = express();
const bodyParse = require('body-parser')
const porta = 3000;
const mysql = require('mysql');

//configurar os cabeçalhos
app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type');
  next();
});

//configurar o body-parser para pegar via POST os dados recebidos
app.use( bodyParse.urlencoded( { extended:true } ) );
app.use( bodyParse.json() );

//definindo as rotas
const rota = express.Router();
rota.get('/', (req,res) => res.json({'message':'Funcionando a rota / !!!'}));
app.use('/',rota);

//iniciar servidor
app.listen(porta);
console.log('API funcionando!!!');

// conexao com mysql
function execSQLQuery(sqlQry, res) {
  //configura conexao
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
  });
  // verificar se a conexao foi bem sucedida
  connection.query(sqlQry, function(error, results, fields){
    if(error)
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('Conexao com BD OK!');
  });
}

//criando rotas para /clientes e /cliente/id
rota.get('/clientes', (req,res)=>{
  execSQLQuery('SELECT * FROM clientes', res);
});

rota.get('/clientes/:id', (req,res)=>{
  let filtro = '';
  if (req.params.id) filtro = ' WHERE id_cliente = ' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM clientes' + filtro, res);
});

// inserir a rota para o delete
rota.delete('/clientes/:id', (req,res)=>{
  let filtro = '';
  if (req.params.id) filtro = ' WHERE id_cliente = ' + parseInt(req.params.id);
  execSQLQuery('DELETE FROM clientes' + filtro, res);
});

// inserir a rota para o insert
rota.post('/clientes', (req,res)=>{
  const nomecliente = req.body.nome.substring(0,40);
  const dataaniver = req.body.dataaniver.substring(0,10);
  const email = req.body.email.substring(0,60);
  execSQLQuery(`INSERT INTO clientes (nome_cliente, data_niver, email) VALUES ('${nomecliente}','${dataaniver}','${email}')`, res);
});

// inserir a rota para o update
rota.patch('/clientes/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  const nomecliente = req.body.nome.substring(0,40);
  const dataaniver = req.body.dataaniver.substring(0,10);
  const email = req.body.email.substring(0,60);
  execSQLQuery(`UPDATE clientes SET nome_cliente = '${nomecliente}', data_niver = '${dataaniver}', email = '${email}' WHERE id_cliente = ${id}`, res);
});