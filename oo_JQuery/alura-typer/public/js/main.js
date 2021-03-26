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
         }
         
      }, 1000); 
});
};

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





