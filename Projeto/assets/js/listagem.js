var url = "http://localhost:3000/";

$(document).ready(function () {

  $.ajax({
    url: url + "categorias",
    type:"GET",
    dataType:"json",
    success: function( data )
    {
      if (data.length > 0) {
        var html_categorias = "<option selected>Escolha uma categoria</option>";
        data.forEach(categoria => {
          html_categorias += "<option value='" + categoria.id_categ_prod + "'>" + categoria.desc_categ_prod + "</option>";
        });
        $("#selectCategorias").html(html_categorias);
      } else {
        console.log("Erro categorias.");
      }
    }
  });

  $("#selectCategorias").change(function () {

    $("#descricao-produto").html("");

    var id_categoria = this.value;
    if (id_categoria > 0) {
      $.ajax({
        url: url + "categoriaprodutos/" + id_categoria,
        type:"GET",
        dataType:"json",
        success: function( data )
        {
          if (data.length > 0) {
            var html_produtos = "<option selected>Escolha um produto</option>";
            data.forEach(produto => {
              html_produtos += "<option value='" + produto.id_prod + "'>" + produto.desc_produto + "</option>";
            });
            $("#selectProdutos").html(html_produtos);
          } else {
            console.log("Erro produtos.");
          }
        }
      });
    } else {
      $("#selectProdutos").html("<option selected>Escolha uma categoria primeiro</option>");
    }

  });

  $("#selectProdutos").change(function () {

    $("#descricao-produto").html("");

    var id_produto = this.value;
    if (id_produto > 0) {
      $.ajax({
        url: url + "produtos/" + id_produto,
        type:"GET",
        dataType:"json",
        success: function( data )
        {
          if (data.length > 0) {
            var html_descricao_produto = "";
            data.forEach(produto => {
              var preco = "R$ " + produto.preco_produto.toFixed(2).replace(".",",")
              html_descricao_produto += `<h3>${produto.desc_produto}</h3><h4>${preco}</h4>`;
            });
            $("#descricao-produto").html(html_descricao_produto);
          } else {
            console.log("Erro produto.");
          }
        }
      });
    } else {
      $("#selectProdutos").html("<option selected>Escolha uma categoria primeiro</option>");
    }

  });
});
