<?php

  if ($_GET) :
    $nomeUsr = $_GET['nome'];
    $idadeUsr = $_GET['idade'];

    if ($idadeUsr > 18) {
      echo "O usuário " . $nomeUsr . " é de MAIOR!!";
    } else {
      echo "O usuário " . $nomeUsr . " é de MENOR!!";
    }
    
  endif;

?>