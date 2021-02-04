//bmi

//busca geral nos dados do primeiro paciente
let pacientes = document.querySelectorAll(".paciente");

//calculo bmi
for ( var i = 0 ; i < pacientes.length ; i++ ){
    console.log(pacientes[i]);

    var paciente = pacientes[i];
    
    //dados peso
    //busca no conteudo da id a classe peso
    let tdPeso = paciente.querySelector(".info-peso");
    //busca o valor do peso na td
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
