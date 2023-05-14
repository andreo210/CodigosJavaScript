let nome = ["andre", "oliveira", "alcantara"]

nome.shift(); //remove o primeiro elemento do array

nome.unshift("araujo");//inseri elemento no começo do array

for(let x = 0; x<nome.length; x++){
    console.log(nome[x])
}
