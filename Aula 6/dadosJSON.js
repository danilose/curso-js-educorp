  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
  if (xhr.status === 200) {
    // analisa uma string JSON, construindo um objeto JavaScript descrito pela string
    var objeto = JSON.parse(xhr.responseText);
    var dados = '';
    for (var i = 0; i < objeto.length; i++) {
      dados += '<div class="quadro">';
      dados += '<b>Cidade:' + objeto[i].cidade + '</b><br>';
      dados += '<img src="' + objeto[i].imagem + '" ';
      dados += '</div>';
    }
   document.getElementById('resultado').innerHTML = dados;    
  }
};
xhr.open('GET','cidades.json',true);
xhr.send();
 
