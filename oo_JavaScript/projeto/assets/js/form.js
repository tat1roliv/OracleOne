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

    //add paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //limpar formulario
    form.reset();
});

//coletando as informações digitadas
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
function montaTr(paciente){
        //criando a variavel para nova tr / linha(new user)
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente")//add class paciente ao novo objet da tabela

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.bmi, "info-imc"));
        
    return pacienteTr;
}

//montar td
function montaTd(dado, classe){
    //criando colunas da nova linha
    var td = document.createElement("td");
    //inserindo os valores digitados na nova linha (atribuindo o valor correto em cada celula)
    td.textContent = dado;
    //add class paciente ao novo objet da tabela
    td.classList.add(classe);
    
}

//verificações/validações
function validaPaciente(paciente){

    if ( paciente.peso < 2.0 && paciente.altura >= 0 ){
        return true;
    }
}