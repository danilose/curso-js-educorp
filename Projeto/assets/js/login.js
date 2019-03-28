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

    $.getJSON(url + "/" + idCliente, function (result) {
      var arr = result;
      var out = "<table class='table table-striped'>";

      for (var i = 0; i < arr.length; i++) {
        out += "<tr><td>" + arr[i].id_cliente + "</td><td>" + arr[i].nome_cliente + "</td><td>" + arr[i].email + "</td></tr>"
      }
      out += "</table>";
      document.getElementById("id01").innerHTML = out;
    });
  }));

  $.getJSON(url, function (result) {
    var arr = result;
    var out = "<table class='table table-striped'>";

    for (var i = 0; i < arr.length; i++) {
      out += "<tr><td>" + arr[i].id_cliente + "</td><td>" + arr[i].nome_cliente + "</td><td>" + arr[i].email + "</td></tr>"
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
  });
});
