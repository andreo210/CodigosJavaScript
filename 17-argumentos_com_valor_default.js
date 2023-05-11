function repetirFrase(string, n=2){
for(let x = 1; x<=n; x++ ){
    console.log(string +" "+ x);
}

}

//repetirar 5 vezes
repetirFrase("testando",5);

//caso não passe o valor de n ele imprimirar o valor defual que é 2
repetirFrase("só duas vezes");