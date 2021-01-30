
//let titulo = document.querySelector(".titulo");
//titulo.textContent = "health care";

//busca geral nos dados do primeiro paciente
let paciente = document.querySelector("#primeiroPaciente");

//dados peso
//busca no conteudo da id a classe peso
let tdPeso = paciente.querySelector(".info-peso");
//busca o valor do peso na td (textContent), como string?
let pesoPaciente = (tdPeso.textContent);


//console = peso paciente 1
console.log(pesoPaciente);

//dados altura
let tdAltura = paciente.querySelector(".info-altura");
let alturaPaciente = tdAltura.textContent;

//BMI
let bmiPaciente = pesoPaciente / (alturaPaciente*alturaPaciente);
console.log(bmiPaciente);

//exibe bmi
var tdBmi = paciente.querySelector(".info-imc");
tdBmi.textContent = bmiPaciente;;

