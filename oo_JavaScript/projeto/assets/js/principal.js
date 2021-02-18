var pacientes = document.querySelectorAll(".paciente");

//calculo bmi
for ( var i = 0 ; i < pacientes.length ; i++ ){

    var paciente = pacientes[i];
 
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = (tdPeso.textContent);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdBmi = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if ( !pesoValido ){
        console.log("Peso inválido");
        pesoValido = false;
        tdBmi.textContent = "Peso Inválido"
        paciente.classList.add('paciente-invalido');
    }

    if( !alturaValida  ){
        alturaValida = false;
        tdBmi.textContent = "Altura Inválida"
        paciente.classList.add('paciente-invalido');
    }
    //validacao final + exibe bmi na tabela
    if( pesoValido && alturaValida ){
        var bmi = calculaBmi(peso, altura);  
        tdBmi.textContent = bmi;
       } 

}

function calculaBmi(peso, altura){
    var bmi = 0;
    bmi = peso / (altura*altura);
    return bmi.toFixed(2);

}   
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



        