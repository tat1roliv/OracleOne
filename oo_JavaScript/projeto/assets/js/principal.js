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
    if ( !pesoValido ){
        console.log("Peso inválido");
        pesoValido = false;
        paciente.style.backgroundColor = "lightcoral";
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
        var bmiPaciente = calculaBmi(peso, altura);
        console.log(bmiPaciente);

        //exibe bmi na tabela
        tdBmi.textContent = bmiPaciente;
    }   
}

function validaPeso(peso){
    if (peso >=0 && peso < 500){
        return true;
    } else{
        return false;
    }
}

function validaAltura(peso){
    if ( altura >=0 && altura < 3 ){
        return true;
    } else{
        return false;
    }
}

function calculaBmi(peso, altura){
    var bmi = 0;
    bmi = pesoPaciente / (alturaPaciente*alturaPaciente);
    return bmi.toFixed(2);//2 casas decimais;

}