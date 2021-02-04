//formulario entrada new user

//chamando a funcao para on button click
var botaoAdicionar = document.querySelector("#adicionar-paciente")

//funcao anonima
botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();//previne comportamentos padroes do browser

    //incluir novo user from form
    var  form = document.querySelector("#form-adiciona");
       
    //coletando as informações digitadas
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
 
   //criando a variavel para nova tr / linha(new user)
    var pacienteTr = document.createElement("tr");
    
    //criando colunas da nova linha
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var bmiTd = document.createElement("td");

    //inserindo os valores digitados na nova linha (atribuindo o valor correto em cada celula)
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //colunas-> child da linha
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //nova linha (new user) -> child da tabela (tbody)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});