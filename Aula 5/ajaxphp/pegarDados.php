<html>
<head><title></title>
</head>
<body>
<?php
  include("conexao.inc.php");
  $sql = "SELECT * from USUARIO";
  $status = sqlsrv_query($conexao,$sql);
  echo "<table width='150%' border='1' cellpadding='10' colsspan='10'>";
  echo "<tr>";
  echo "<td align='center'><b>NOME Usuario</b></td>";
  echo "<td align='center'><b>EMAIL Usuario</b></td>";
  echo "</tr>";

  while (($dados = sqlsrv_fetch_array($status))) 
  { 
     echo "<tr>";
     echo "<td>" . $dados[1] . "</td>";
     echo "<td>" . $dados[4] . "</td>";
     echo "</tr>";
  } 
   echo "</table>";	
?>
</body></html>