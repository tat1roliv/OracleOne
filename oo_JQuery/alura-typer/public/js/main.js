$(document).ready(function(){ //$(document).ready => $(function(){ //code });
   atualizaTamanhoFrase();
   inicializaContadores();
   inicializaCronometro();
   $("#botao-reiniciar").click(reiniciar);
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
         }
         
      }, 1000); 
});
};

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

   });
}





