$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
        {
            scrollTop: posicaoPlacar+"px"
        }, 1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
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

function removeLinha() {
    event.preventDefault();

   var linha = $(this).parent().parent();
   linha.fadeOut(1000);//fadeIn() //fadeToggle();
   setTimeout(function(){
       linha.remove()
   }, 1000);

};

function mostraPlacar(){
    //$(".placar").css("display", "block");
    $(".placar").stop().slideToggle(1000);//show() //hide()//toggle()//slideDown() //slideUp()

}

function sincronizaPlacar(){
    var placar = [];
    
    var linhas = $("tbody>tr");//selecionar todos os filhos do tbody -> todas tr
    //foreach
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras =  $(this).find("td:nth-child(2)").text();
        
        var score = {
            usuario: usuario,
            pontos: palavras
        };
        placar.push(score);
    } );

    console.log(placar);
    /*
    para enviar para o servidor, nao envia direto o array->
    string ou objeto JS
    */
    var dados ={
        placar: placar
    };
    /*
    get -> retorna placar que estar no servidor (localhost/placar)
    post -> sobrescreve o placar anterior com o que vc enviar
    */
    $.post("http://localhost:3000/placar", dados, function(){
        console.log("salvou dados no servidor");
    });

};

function atualizaPlacar() {
    $.get("http://localhost:3000/placar", function(data){
        //console.log('puxando dados do servidor');
        $(data).each(function(){
            var linha = novaLinha(this.usuario,this.pontos);
            linha.find(".botao-remover").click(removeLinha);
            //console.log(linha);
            $("tbody").append(linha);
        })
    })
}

