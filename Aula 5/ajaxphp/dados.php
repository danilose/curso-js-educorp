<html>
  <head>
    <title>Ajax PHP</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
      $.ajax({
        type: "POST",
        url: "pegarDados.php",
        data: "",
        beforeSend: ,
        sucess: function (data) {
          $("#pagina").html(data);
        }
      });
    </script>
  </head>
</html>