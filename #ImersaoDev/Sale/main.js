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

/*

 function sorteia(){
            return Math.round( Math.random()*10 );
        }

        function sorteiaNumeros(quantidade){

            var segredos = [];

            var n = 1;
            
            while ( n <= quantidade ){

                var nAleatorio = sorteia();

                var achou = false;
                
                if (nAleatorio !== 0 ){

                    for (var posicao = 0; posicao < segredos.length ; posicao++){
                        if (segredos [posicao] == nAleatorio){
                            achou = true;
                            break;
                        }

                    }
                    if (achou == false){
                        segredos.push(nAleatorio);
                        n++;
                    }
                }

            }
            return segredos;
            
        }
        
       

        var segredos = sorteiaNumeros(3);//numero de posições do array
        console.log(segredos);//exibe numeros sorteados para o array 

        var input = document.querySelector("input");

        input.focus();

        function verifica() {
            
            var achou  = false;

            for (posicao = 0; posicao <= segredos.length; posicao++) {
                
                if(input.value == segredos[posicao]) {

                    alert("Gol!");
                    achou = true;
                    break;

                }

                if (achou == false){
                    alert("Fora!");
                }
            input.value = "";
            input.focus();     
            }

        }
   
         var button = document.querySelector("button");

         button.onclick = verifica;


*/