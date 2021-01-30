
//let titulo = document.querySelector(".titulo");
//titulo.textContent = "health care";

//busca geral nos dados do primeiro paciente
let paciente = document.querySelector("#primeiroPaciente");

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
}

//altura

if(alturaPaciente <= 0 || alturaPaciente > 2.5){
    //console.log("Altura inválida");
    alturaValido = false;
    tdBmi.textContent = "height error";
}


//BMI
if( pesoValido && alturaValido){
    let bmiPaciente = pesoPaciente / (alturaPaciente*alturaPaciente);
    //console.log(bmiPaciente);

    //exibe bmi
    
    tdBmi.textContent = bmiPaciente;
}   



