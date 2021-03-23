var numInput =  document.querySelector(".input-decimal").value;

console.log(numInput.textContent);
//var numero = 5

function toBinary(dec){
    return (dec >>> 0).toString(2);
}

var buttonGenerate = document.querySelector('.buttonview');

buttonGenerate.addEventListener("click", function(){
    var numInput = document.querySelector(".input-decimal").value;
    parseInt(numInput);
    var res = document.querySelector("#res");
    res.textContent = toBinary(numInput);
});
