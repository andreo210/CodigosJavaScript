//podemos chamar uma função em js sem op numero iguais de parametros 

function soma(a,b){
    if(a ===undefined || b === undefined){
        console.log("essa função precisa de 2 argumentos");
    }else{
        return a + b;
    }

}
console.log(soma(1));

console.log(soma(2,3));