$(document).ready(function(){ //$(document).ready => $(function(){ //code });
   atualizaTamanhoFrase();
   inicializaContadores();
   inicializaCronometro();
   $("#botao-reiniciar").click(reiniciar);
   inicializaMarcadores();
});

function atualizaTamanhoFrase(){

   var frase = $(".frase").text();//$ = jQuery
   var numPalavras = frase.split(" ").length;//parte a string atribuindo a uma pos do array criado cada palavra;

   var tamanhoFrase = $("#tamanho-frase");
   tamanhoFrase.text(numPalavras);//atribuindo valor capturado
}

var campo = $(".campo-digitacao");
//contadores
function inicializaContadores(){
   campo.on("input", function(){
      var conteudo = campo.val();
   
      var qtdPalavras = conteudo.split(/\S+/).length -1;//expressao regular para espaços vazios na string => (/\S+/)
      $("#contador-palavras").text(qtdPalavras);
   
      var qtdCaracteres = conteudo.length;
      $("#contador-caracteres").text(qtdCaracteres);
   
   });
};

//timer 
function inicializaCronometro(){
   var tempoRestante = $("#tempo-digitacao").text();

   campo.one("focus", function(){// on (intermitente) x one (executa apenas uma vez) functions
      var cronometroId = setInterval(function(){
         tempoRestante--;
         $("#tempo-digitacao").text(tempoRestante);

         if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroId);
            //campo.css("background-color", "lightgray");
            campo.toggleClass("campo-digitacao-desativado");
            clearInterval(cronometroId);
            finalizaJogo();
         }
         
      }, 1000); 
});
};

function finalizaJogo(){
   campo.attr("disabled", true); 
   campo.toggleClass("campo-digitacao-desativado");
   inserePlacar();
}

//verificacao texto digitado
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
/*
 var digitouCorreto = frase.startsWith(digitado);
if(digitouCorreto) {
 campo.addClass("borda-verde");
} else {
 campo.addClass("borda-vermelha");
}
*/

});
}

//botao
var tempoInicial =  $("#tempo-digitacao").text();

function reiniciar(){
   $("#botao-reiniciar").click(function(){
      campo.attr("disabled",false);
      campo.val("");//val ->value
      $("#contador-palavras").text("0");
      $("#contador-caracteres").text("0");
      $("#tempo-digitacao").text(tempoInicial);
      inicializaCronometro();
      campo.toggleClass("campo-digitacao-desativado");
      campo.removeClass("campo-errado");
      campo.removeClass("campo-correto")

   });
}

function inserePlacar(){
   var corpoTabela = $(".placar").find("tbody");
   var usuario = "Boni";
   var numPalavras = $("#contador-palavras").text();

   var linha = "<tr>"+
                  "<td>" + usuario +  "<td>" 
                  "<td>" + numPalavras +  "<td>" 
               "</tr>";
               
   corpoTabela.prepend(linha);
}



