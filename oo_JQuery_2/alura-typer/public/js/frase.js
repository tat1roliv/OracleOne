$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaAleatoria);

function fraseAleatoria(){
    
    $("#spinner").toggle();

    //GET POST...
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    }); 
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var nAleatorio = Math.floor(Math.random()*data.length);//o valor maxim = tamanho do array recebido
    frase.text(data[nAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[nAleatorio].tempo);
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = { id: fraseId};
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();

        }, 2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.text);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}