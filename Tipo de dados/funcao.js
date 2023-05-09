//1º jeito  de escrever
function escreverNome(){
    console.log("meu nome é andré");
}
escreverNome();


//2º jeito de escrever
const textoNoConsole = function(){
    console.log("texto no console");
}
textoNoConsole();


//função com parametro
const teste = function(texto){
    console.log(texto);
}
teste("testando")


//função de multiplicação
function multiplicarNumero(x,y,z){
    return x * y * z;
}
console.log(multiplicarNumero(2,2,5))
