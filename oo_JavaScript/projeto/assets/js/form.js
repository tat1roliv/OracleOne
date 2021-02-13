//formulario entrada new user
//chamando a funcao para on button click
var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function (event) {//funcao anonima

    event.preventDefault();//previne comportamentos padroes do browser


    //incluir novo user from form
    var  form = document.querySelector("#form-adiciona");
       
    //coletando as informações digitadas
    var paciente = obtemPacientesDoFormulario(form);
    
    //montar tr
    var pacienteTr = montaTr(paciente); 

    //msg erro
    var erros = validaPaciente(paciente);
    console.log(erros);

    //valida paciente
    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    //add paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    //limpar formulario
    form.reset();
    var mensagemErro = document.querySelector("mensagens-erro");

   // mensagemErro.innerHTML = "";

});

//mensagem de erro
/*
export default 
*/
function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//coletando as informações digitadas
/*
export default 
*/
function obtemPacientesDoFormulario(form){
       
    var paciente = { 
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaBmi(form.peso.value, form.altura.value)
    }
    return paciente;  
}
//montar tr 
/*
export default 
*/
function montaTr(paciente){


        //criando a variavel para nova tr / linha(new user)
        var pacienteTr = document.createElement("tr");

        pacienteTr.classList.add("paciente")//add class paciente ao novo object da tabela

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.bmi, "info-imc"));
        
    return pacienteTr;
}

//montar td
/*export default 
*/
function montaTd(dado, classe){
    //criando colunas da nova linha
    var td = document.createElement("td");
    //inserindo os valores digitados na nova linha (atribuindo o valor correto em cada celula)
    td.textContent = dado;
    //add class paciente ao novo objet da tabela
    td.classList.add(classe);
    return td;
    
}

//verificações/validações
/*
export default 
*/
function validaPaciente(paciente){

    var erros = [];

    if ( paciente.nome.length == 0 ){
        erros.push("você deve declarar o nome");
    }

    if ( !validaPeso(paciente.peso) ){
        erros.push("peso inválido");
    }

    if ( !validaAltura(paciente.altura) ){
        erros.push("altura inválida");
    }

    if (paciente.gordura.length == 0 ){
        erros.push("a gordura não pode ser zero!");
    }
    return erros;
}