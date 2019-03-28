var url = "http://localhost:3000/login";

$(document).ready(function () {

  if ($("#btnEnviar").click(function () {

    var login = "";
    var senha = "";

    if ($("#inputLogin").val()) {
      login = $("#inputLogin").val();
    }

    if ($("#inputSenha").val()) {
      senha = $("#inputSenha").val();
    }

    $.ajax({
      url: url,
      type:"POST",
      dataType:"json",
      contentType:"application/x-www-form-urlencoded",
      data:{
        login:login,
        senha:senha
      },

      success: function( data )
      {
        if (data.length > 0) {
          $("#msgerro").html("");
          window.location.replace("listagem.html");
        } else {
          $("#msgerro").html("Login ou senha incorretos!");
        }
      }
    });
  }));

});
