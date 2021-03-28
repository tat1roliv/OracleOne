$(document).ready(function(){ 
   atualizaTamanhoFrase();
   inicializaContadores();
   inicializaCronometro();
   $("#botao-reiniciar").click(reiniciar);
   inicializaMarcadores();
});

function atualizaTamanhoFrase(){

   var frase = $(".frase").text();
   var numPalavras = frase.split(" ").length;

   var tamanhoFrase = $("#tamanho-frase");
   tamanhoFrase.text(numPalavras);
}

var campo = $(".campo-digitacao");
//contadores
function inicializaContadores(){
   campo.on("input", function(){
      var conteudo = campo.val();
   
      var qtdPalavras = conteudo.split(/\S+/).length -1;
      $("#contador-palavras").text(qtdPalavras);
   
      var qtdCaracteres = conteudo.length;
      $("#contador-caracteres").text(qtdCaracteres);
   
   });
};
 
function inicializaCronometro(){
   var tempoRestante = $("#tempo-digitacao").text();

   campo.one("focus", function(){
      var cronometroId = setInterval(function(){
         tempoRestante--;
         $("#tempo-digitacao").text(tempoRestante);

         if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroId);
            campo.toggleClass("campo-digitacao-desativado");
            clearInterval(cronometroId);
            finalizaJogo();
         }
         
      }, 1000); 
});
};

function inserePlacar(){
   var corpoTabela = $(".placar").find("tbody");
   var usuario = "Boni";
   var qtPalavras = $("#contador-palavras").text();

   var linha = "<tr>"+
                  "<td>"+usuario+"</td>" 
                  "<td>"+qtPalavras+"</td>" 
               "</tr>";
   corpoTabela.prepend(linha);
}

function finalizaJogo(){
   campo.attr("disabled", true); 
   campo.toggleClass("campo-digitacao-desativado");
   inserePlacar();
}

function inicializaMarcadores(){

   var frase = $(".frase").text();
   campo.on("input", function(){
   
   var digitado = campo.val();
   var comparavel = frase.substr(0, digitado.length);
   console.log("frase" + frase);
   console.log("comparavel"+comparavel);

   if (digitado == comparavel) {
      campo.addClass("campo-correto");
      campo.removeClass("campo-errado");
   }else{
      campo.addClass("campo-errado");
      campo.removeClass("campo-correto");
   }

});
}

var tempoInicial =  $("#tempo-digitacao").text();

function reiniciar(){
   $("#botao-reiniciar").click(function(){
      campo.attr("disabled",false);
      campo.val("");
      $("#contador-palavras").text("0");
      $("#contador-caracteres").text("0");
      $("#tempo-digitacao").text(tempoInicial);
      inicializaCronometro();
      campo.toggleClass("campo-digitacao-desativado");
      campo.removeClass("campo-errado");
      campo.removeClass("campo-correto")

   });
}


