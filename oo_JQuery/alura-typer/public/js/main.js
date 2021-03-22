//console.log("arquivo main");

var frase = $(".frase").text();//$ = jQuery
var numeroPalavras = frase.split(" ").length;//parte a string atribuindo a uma pos do array criado cada palavra;

//console.log(frase);
//console.log(numeroPalavras);

var tamanhoFrase = $("#tamanho-frase-tela");
//console.log(tamanhoFrase);
tamanhoFrase.text(numeroPalavras);//atribuindo valor capturado


