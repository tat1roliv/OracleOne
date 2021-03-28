var numeroDigitado = document.querySelector(".number-user").value;
console.log(numeroDigitado);

let maximoDesconto = 50;

function generateNumRandom(){
    let nRandom = Math.floor(Math.random()*(maximoDesconto));
    return nRandom;
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