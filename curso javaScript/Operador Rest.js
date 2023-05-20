//uma forma da função receber qualquer parametro
//O Operador Rest vbai virar um array
let num1 = 1;
let num2 = 2;
let num3 = 3;

function imprimir(...args){
    for(let i = 0; i< args.length; i++){
        console.log(args[i])
    }
}

imprimir(num1)
imprimir(3)