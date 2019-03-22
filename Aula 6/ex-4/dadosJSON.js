  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
  if (xhr.status === 200) {
    // analisa uma string JSON, construindo um objeto JavaScript descrito pela string
    var objeto = JSON.parse(xhr.responseText);
    var dados = '';
    dados += '<div id="quadro">';
    for (var i = 0; i < objeto.length; i++) {
      dados += '<div class="' + objeto[i].categoria + '" id="' + objeto[i].idProduto + '">';
      dados += '<b>' + objeto[i].nome + '</b><br>';
      dados += '<img width=200 heigth=200 src="' + objeto[i].imagem + '" ';
      dados += '</div>';
    }
    dados += '</div>';
   document.getElementById('resultado').innerHTML = dados;    
  }
};
xhr.open('GET','produtos.json',true);
xhr.send();
 
/*
"idProduto" : 7,
  "categoria" : "Escritório",
  "nome" : "Pasta",
  "imagem" : "pasta.jpg"

*/