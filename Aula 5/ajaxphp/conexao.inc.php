<?php
  $servidor = "servidor";
  $username = "usuarioBD";
  $senha    = "senhaBD";
  $base     = "baseDados";
  $InfConexao = array("Database"=>$base,"PWD"=>$senha,"UID"=>$username);
  $conexao = sqlsrv_connect($servidor, $InfConexao);
  if (!$conexao)  {
    exit("Falha na conexão com servidor BD");
  }



