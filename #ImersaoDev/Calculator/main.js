var valor;
var resultado;
function insert(num){
    valor = document.calculator.textview.value += num;
}
function reset(){
    document.calculator.textview.value = '';
}
function result(){
    resultado = eval(valor);
    document.calculator.textview.value = resultado.toLocaleString('pt-BR');
}