var nome = "Prof. 'Madson";
var sobreNome = 'Aguiar Rodrigues';
var nomeCompleto = nome + " " + sobreNome;
var vazia = "";
var texto = "texto \
texto \
texto";

console.log("Nome completo: " + nomeCompleto + vazia);//concatena as variaveis

var numeroString = "20" + 10;
var numeroStringInv = 10 + "50";

console.log("valor: " + numeroString + " - " + numeroStringInv);//concatena um numero com uma variavel string

var stringVar = "string texto";
var numeroVar = 10;

console.log("Tipo1:" + typeof stringVar);//verifica que tipo é a variavel
console.log("Tipo2:" + typeof numeroVar);//verifica que tipo é a variavel

console.log("Tamanho string:" + stringVar.length);