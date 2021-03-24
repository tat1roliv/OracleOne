function addNumber(number) {
    
    if (number != '/' && number != '*' && number != '+' && number != '-') {
        alert("Inserir primeiro o valor numérico.");
    }
    
    else{


    }
}


  // Declaração da função que executa a operação já escrita
  function addEqual() {
    var content = document.querySelector('.result').value;

  }
  //operações matematicas basicas
  
  function soma(numeroA,numeroB){
      return numeroA+numeroB
    }
    
    function sub(numeroA,numeroB){
      return numeroA-numeroB
    }
    
    function mult(numeroA,numeroB){
      return numeroA*numeroB
    }
    
    function div(dividendo,divisor){
      if(divisor == 0){
        return 'Erro de divisão por zero'
      }
      else{
        return dividendo/divisor
      }
    }
    
    //bloco de instrução
    var numeroA = parseInt(prompt('Numero A: '))
    var numeroB = parseInt(prompt('Numero B: '))
    
    alert('Soma: ' + soma(numeroA,numeroB))
    alert('Subtração: ' + sub(numeroA,numeroB))
    alert('Multiplicação: ' + mult(numeroA,numeroB))
    alert('Divisão: ' + div(numeroA,numeroB))