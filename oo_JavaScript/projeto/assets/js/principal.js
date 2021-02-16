
//busca geral nos dados do primeiro paciente
var pacientes = document.querySelectorAll(".paciente");

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
    return bmi.toFixed(2);//2 casas decimais;

}   
//calculo bmi
for ( var i = 0 ; i < pacientes.length ; i++ ){

    var paciente = pacientes[i];
    
    //dados peso
    var tdPeso = paciente.querySelector(".info-peso");//busca o valor do peso na td
    var pesoPaciente = (tdPeso.textContent);

    //dados altura
    var tdAltura = paciente.querySelector(".info-altura");
    var alturaPaciente = tdAltura.textContent;

    //validacoes
    var tdBmi = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);


    if ( !validaPeso(paciente.peso) ){
        console.log("Peso inválido");
        pesoValido = false;
        //paciente.style.backgroundColor = "lightcoral";
        tdBmi.textContent = "Peso Inválido"
        paciente.classList.add('paciente-invalido');
    }

    
    if( !validaAltura(paciente.altura) ){
        alturaValida = false;
        tdBmi.textContent = "height error";
        //paciente.style.backgroundColor = "lightcoral";
        tdBmi.textContent = "Altura Inválida"
        paciente.classList.add('paciente-invalido');
    }
       //validapeso e altura
    if( validaPeso && validaAltura){
        var bmi = calculaBmi(pesoPaciente, alturaPaciente);
       //exibe bmi na tabela
        tdBmi.textContent = bmi;
       } 

}



   

        