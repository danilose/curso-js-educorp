  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
  if (xhr.status === 200) {
    // analisa uma string JSON, construindo um objeto JavaScript descrito pela string
    var objeto = JSON.parse(xhr.responseText);
    var dados = '';
    dados += '<div class="list-group">';
    for (var i = 0; i < objeto.length; i++) {
      //dados += '<a href="#" class="list-group-item list-group-item-action ' + objeto[i].categoria + '" id="' + objeto[i].idProduto + '">';
      dados += '<a href="prod' + objeto[i].idProduto + '" class="list-group-item list-group-item-action ' + objeto[i].categoria + '">' + objeto[i].nome + '</a>';
      //dados += '</a>';
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