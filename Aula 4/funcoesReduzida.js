var operacoes = new Object();

operacoes.A = 0;
operacoes.B = 0;


function Operacoes(n1,n2){
  this.A = n1;
  this.B = n2;

  this.soma = function () {
    return this.A + this.B;
  }
  this.subtracao = function () {
    return this.A - this.B;
  }

  this.multiplicacao = function () {
    return this.A * this.B;
  }
  this.divisao = function () {
    return this.A / this.B;
  }

  this.raizQuadrada = function () {
    return Math.sqrt(this.A);
  }

  this.potenciaQuadrada = function () {
    return Math.pow(this.A);
  }

  this.umdivididoporx = function () {
    return 1/this.A;
  }

}

$(
  function () {
    var v1, v2, op;
    
    $("input[name=botao]").click(
      function () {
        $("#visor").val($("#visor").val() + $(this).val());
      }
    );
    $("input[name=ce]").click(
      function () {
        $("#visor").val("");
        $("#op").text("");
      }
    );
    $("input[name=soma]").click(
      function () {
        if ( $("#visor").val() != '' ) {
          v1 = parseFloat( $("#visor").val() );
          $("#visor").val("");
          op = "soma";
          $("#op").text( $(this).val() );
        } else {
          alert("Digite um número antes de fazer uma operação!")
        }
      }
    );
    $("input[name=subtracao]").click(
      function () {
        if ( $("#visor").val() != '' ) {
          v1 = parseFloat( $("#visor").val() );
          $("#visor").val("");
          op = "subtracao";
          $("#op").text( $(this).val() );
        } else {
          alert("Digite um número antes de fazer uma operação!")
        }
      }
    );
    $("input[name=raiz]").click(
      function () {
        if ( $("#visor").val() != '' ) {
          v1 = parseFloat( $("#visor").val() );
          var obj_operacoes = new Operacoes(v1, v2);
          $("#visor").val(obj_operacoes.raizQuadrada());
          op = "raiz";
          $("#op").text( $(this).val() );
        } else {
          alert("Digite um número antes de fazer uma operação!")
        }
      }
    );
    $("input[name=igual]").click(
      function () {
        if ( $("#visor").val() != '' ) {
          v2 = parseFloat( $("#visor").val() );
          var obj_operacoes = new Operacoes(v1, v2);
          switch(op){
            case "soma": {
              $("#visor").val(obj_operacoes.soma());
              break;
            }
            case "subtracao": {
              $("#visor").val(obj_operacoes.subtracao());
              break;
            }
          }
        } else {
          alert("Digite um número antes de fazer uma operação!")
        }
      }
    );
  }
);
