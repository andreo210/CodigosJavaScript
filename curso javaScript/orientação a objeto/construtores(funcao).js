let cachorro ={
    pata:4,
    raca:"",
    cor:"",

   latir: function(){
        console.log("au au")
    }
}

function criarCachorro(raca,pata,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.pata = pata;
    cachorro.cor = cor;

    cachorro.latir = function(){

        console.log("au au au");
    }
      return cachorro;
}

let pudo = criarCachorro("preto",4,"amarelo");
console.log(pudo);