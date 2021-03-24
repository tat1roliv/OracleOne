//console.log("arquivo main");

var frase = $(".frase").text();//$ = jQuery
var numPalavras = frase.split(" ").length;//parte a string atribuindo a uma pos do array criado cada palavra;

//console.log(frase);
//console.log(numeroPalavras);

var tamanhoFrase = $("#tamanho-frase");
//console.log(tamanhoFrase);
tamanhoFrase.text(numPalavras);//atribuindo valor capturado

var campo = $(".campo-digitacao");
campo.on("input", function(){
   var conteudo = campo.val();

   var qtdPalavras = conteudo.split(/\S+/).length -1;//expressao regular para espaços vazios na string => (/\S+/)
   $("#contador-palavras").text(qtdPalavras);

   var qtdCaracteres = conteudo.length;
   $("#contador-caracteres").text(qtdCaracteres);

});

//timer campo
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


