$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria); //GET POST...
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var nAleatorio = Math.floor(Math.random()*data.length);//o valor maxim = tamanho do array recebido
    frase.text(data[nAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[nAleatorio].tempo);
}
