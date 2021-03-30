$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){//GET POST...
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    }); 
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var nAleatorio = Math.floor(Math.random()*data.length);//o valor maxim = tamanho do array recebido
    frase.text(data[nAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[nAleatorio].tempo);
}
