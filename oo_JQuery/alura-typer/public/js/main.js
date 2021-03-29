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
   var numPalavras = $("#contador-palavras").text();
  
   var linha = novaLinha(usuario, numPalavras);
   linha.find(".botao-remover").click(removeLinha);
   
   corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras){
   var linha = $("<tr>");//cria elemento e retorna este elemento
   var colunaUsuario = $("<td>").text(usuario);
   var colunaPalavras = $("<td>").text(palavras);
   var colunaRemover = $("<td>");

   var link = $("<a>").addClass("botao-remover").attr("href", "#");
   var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

   link.append(icone);
   colunaRemover.append(link);
   linha.append(colunaUsuario);
   linha.append(colunaPalavras);
   linha.append(colunaRemover);

   return linha;
   
}

function removeLinha(){
   event.preventDefault();
   $(this).parent().parent().remove();

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


