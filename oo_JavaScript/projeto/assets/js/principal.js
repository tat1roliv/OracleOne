/*

//importando funcoes
import { exibeMensagemErro } from './form.js';
import { montaTr } from './form.js';
import { montaTd } from './form.js';
import { validaPaciente } from './form.js';
*/


//bmi

//busca geral nos dados do primeiro paciente
var pacientes = document.querySelectorAll(".paciente");

//calculo bmi
for ( var i = 0 ; i < pacientes.length ; i++ ){
    console.log(pacientes[i]);

    var paciente = pacientes[i];
    
    //dados peso
    //busca no conteudo da id a classe peso
    var tdPeso = paciente.querySelector(".info-peso");
    //busca o valor do peso na td
    var pesoPaciente = (tdPeso.textContent);

    //dados altura
    var tdAltura = paciente.querySelector(".info-altura");
    var alturaPaciente = tdAltura.textContent;

    //validacoes
    var tdBmi = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);//true or false
    var alturaValido = validaAltura(altura);//true or false

    //peso
    if ( !validaPeso ){
        console.log("Peso inválido");
        validaPeso = false;
        paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add('paciente-invalido');
    }

    //altura
    if(!validaAltura){
        //console.log("Altura inválida");
        validaAltura = false;
        tdBmi.textContent = "height error";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add('paciente-invalido');
    }

    //BMI
    if( validaPeso && validaAltura){
        var bmiPaciente = calculaBmi(peso, altura);
        console.log(bmiPaciente);

        //exibe bmi na tabela
        tdBmi.textContent = bmiPaciente;
    }   
}
/*
export default 
*/
function validaPeso(peso){
    if (peso >=0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}
/*
export default 
*/
function validaAltura(altura){
    if ( altura >=0 && altura < 3 ){
        return true;
    } else{
        return false;
    }
}

/*export default */
function calculaBmi(peso, altura){
    var bmi = 0;
    bmi = pesoPaciente / (alturaPaciente*alturaPaciente);
    return bmi.toFixed(2);//2 casas decimais;

}