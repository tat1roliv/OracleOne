var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

var tabela = document.querySelector('table');
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    //setTimeOut(function , parameter (time) )
    setTimeout(function(){
        event.target.parentNode.remove();//parentNode -pega a tag pai no html
    }, 1000)//mls   
});

//this
/*
pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        console.log('duplo clique');
        this.remove();
    })
})
*/

