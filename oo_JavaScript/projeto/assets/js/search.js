var botaoProcurar = document.querySelector('#buscar-paciente');

botaoProcurar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
        var resposta = xhr.responseText;
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        console.log(typeof resposta);


    });

    xhr.send();

});