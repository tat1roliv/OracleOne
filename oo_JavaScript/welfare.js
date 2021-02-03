
//let titulo = document.querySelector(".titulo");
//titulo.textContent = "health care";

//busca geral nos dados do primeiro paciente
let pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for ( var i = 0 ; i < pacientes.length ; i++ ){
    console.log(pacientes[i]);

    //para aproveitar o codigo ja feito
    var paciente = pacientes[i];
    
    //calculo bmi
    //dados peso
    //busca no conteudo da id a classe peso
    let tdPeso = paciente.querySelector(".info-peso");
    //busca o valor do peso na td (textContent), como string?
    let pesoPaciente = (tdPeso.textContent);

    //dados altura
    let tdAltura = paciente.querySelector(".info-altura");
    let alturaPaciente = tdAltura.textContent;

    //validacoes
    let tdBmi = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValido = true;

    //peso
    if (pesoPaciente <= 0 || pesoPaciente > 500){
        //console.log("Peso inválido");
        pesoValido = false;
        tdBmi.textContent = "width error";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add('paciente-invalido');
    }

    //altura
    if(alturaPaciente <= 0 || alturaPaciente > 2.5){
        //console.log("Altura inválida");
        alturaValido = false;
        tdBmi.textContent = "height error";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add('paciente-invalido');
    }

    //BMI
    if( pesoValido && alturaValido){
        let bmiPaciente = pesoPaciente / (alturaPaciente*alturaPaciente);
        //console.log(bmiPaciente);

        //exibe bmi 
        tdBmi.textContent = bmiPaciente.toFixed(2);//2 casas decimais
    }   
}
/*
//listener
titulo.addEventListener("click", mostraMensagem);

//exibe msm
function mostraMensagem(){
    console.log("clickclickclick");  
}
*/

//chamando a funcao para on button click
var botaoAdicionar = document.querySelector("#adicionar-paciente")

//funcao anonima
botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();//previne comportamentos padroes do browser

        //console.log("clickclickclick");

    //incluir novo user from form
    var  form = document.querySelector("#form-adiciona");
        //console.log(form.name.value);

    //coletando as informações digitadas
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    /*
    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
    */
   //criando a variavel para nova tr / linha(new user)
    var pacienteTr = document.createElement("tr");
    
    //criando colunas da nova linha
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var bmiTd = document.createElement("td");

    //inserindo os valores digitados na nova linha (atribuindo o valor correto em cada celula)
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //colunas-> child da linha
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //nova linha (new user) -> child da tabela (tbody)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});
