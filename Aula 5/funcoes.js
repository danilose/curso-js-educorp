var nomeUsuario = prompt("Digite seu nome");
var idadeUsuario = prompt("Digite sua idade");

//window.onload = function () {
  document.getElementById("btnBuscar").onclick = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200){
        document.getElementById("retorno").innerHTML = xhttp.responseText;
      }
    };
    var url = "recebeDados.php?nome=" + nomeUsuario + "&idade=" + idadeUsuario;
    xhttp.open("GET", url, true);
    xhttp.send();
  }
//}
