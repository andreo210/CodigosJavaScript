//declaração de variáveis
var nome = "Prof. Madson";
var sobreNome = "Aguiar Rodrigues";

console.log("Instrução solta em um arquivo JS");

//declaração de função
function exibirNomeConsole(){
    console.log("exibir nome: " + nome);
}

//função chamada no evento onload
function exibirNomeCompleto(){
    console.log("Professor, nome completo: " + nome + " " + sobreNome);
}

//função chamada no botão
function eventoClick(){
    alert("Você clicou em um botão!");
}

//Chamadas de função
exibirNomeConsole();






