var numeroDigitado = document.querySelector(".number-user").value;

let maximoDesconto = 50;

var mensagem = document.querySelector("#resMessage");

function generateNumRandom(){
    let nRandom = Math.floor(Math.random()*(maximoDesconto));
    
    if(numeroDigitado == nRandom){
        mensagem.textContent = "Parabéns, acertou e ganhou o desconto!";
    }else{
        mensagem.textContent = "Você não ganhou o desconto :(";
    }
    return nRandom;
}

function screenMessage(){
    var textoScreen = document.querySelector("#resMessage").textContent();
}

var currentNumber = document.querySelector("#res");

function changeData(){
    var numberSale = generateNumRandom();
    currentNumber.textContent = numberSale;  
 }
var buttonGenerate = document.querySelector('.boxNewText');
buttonGenerate.addEventListener("click", function(){
    changeData();
});
