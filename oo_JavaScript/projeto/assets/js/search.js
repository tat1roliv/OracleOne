var botaoProcurar = document.querySelector('#buscar-paciente');

botaoProcurar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //api

    xhr.send();

    xhr.addEventListener("load", function(){ //quando carregar os dados => executar funcao
        //console.log(xhr.responseText);
        var resposta = xhr.responseText; //retorna api em string => JavaScriptObjectNotation JSON
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta); //transforma de JSON para JS
        console.log(typeof resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacientenaTabela(paciente);
       
        });


    });

   // xhr.send();

});