<html>
<head><title></title>
<style>
#quadro {
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  border: 3px solid black; 
}

#pagina {
  width: 300px;
  height: 300px;
  margin: 40px auto;
}

.posicaoLink1 {
  position: absolute;
  top: 30px;
  left: 600px;
}

.posicaoLink2 {
  position: absolute;
  top: 30px;
  left: 700px;
}

.posicaoLink3 {
  position: absolute;
  top: 30px;
  left: 800px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
  $(document).ready(function() {
     $("a").click(function(evt) {
        evt.preventDefault();   // tira a funcionalidade de link
        var href = $(this).attr('href');       

        $.ajax({
           type: "POST",
           url: href,
           // data: "",  // não iremos usar pq os dados virão do arquivo PHP
           beforeSend: function() { 
               $("quadro").show();
           },
           success: function(data) {
              $("#pagina").html(data);
           } 
        });
     });
  });
</script>
</head>
<body>
  <div id="quadro">
    <a class="posicaoLink1" href="contato.php">Contato</a>
    <a class="posicaoLink2" href="missao.php">Missao</a>
    <a class="posicaoLink3" href="dados.php">Pegando Dados</a>
    <br><br><br>
    <div id="pagina">CONTEUDO AJAX</div>
  </div>
</body></html>