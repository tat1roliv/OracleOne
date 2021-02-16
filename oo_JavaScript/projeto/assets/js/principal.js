var pacientes = document.querySelectorAll(".paciente");//busca geral nos dados do primeiro paciente

function validaPeso(peso){
    if (peso >=0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if ( altura >=0 && altura <= 3 ){
        return true;
    } else{
        return false;
    }
}

function calculaBmi(pesoPaciente, alturaPaciente){
    var bmi = 0;
    bmi = pesoPaciente / (alturaPaciente*alturaPaciente);
    return bmi.toFixed(2);

}   
//calculo bmi
for ( var i = 0 ; i < pacientes.length ; i++ ){

    var paciente = pacientes[i];
    
    //peso
    var tdPeso = paciente.querySelector(".info-peso");
    var pesoPaciente = (tdPeso.textContent);

    //daltura
    var tdAltura = paciente.querySelector(".info-altura");
    var alturaPaciente = tdAltura.textContent;

    //validacoes
    var tdBmi = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if ( !validaPeso(paciente.peso) ){
        console.log("Peso inválido");
        pesoValido = false;
        tdBmi.textContent = "Peso Inválido"
        paciente.classList.add('paciente-invalido');
    }

    if( !validaAltura(paciente.altura) ){
        alturaValida = false;
        tdBmi.textContent = "Altura Inválida"
        paciente.classList.add('paciente-invalido');
    }

    if( validaPeso && validaAltura){
        var bmi = calculaBmi(pesoPaciente, alturaPaciente);
       //exibe bmi na tabela
        tdBmi.textContent = bmi;
       } 

}
        