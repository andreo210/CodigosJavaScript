let cachorro ={
    pata:4,
    raca:"",
    cor:"",

   latir: function(){
        console.log("au au")
    }
}

function Cachorro(raca,pata,cor){
    this.raca = raca;
    this.pata = pata;
    thiscor = cor;

    this.latir = function(){

        console.log("au au au");
    }
      return cachorro;
}

let pudo = new Cachorro("pudo", 4, "preto")
console.log(pudo);
console.log(pudo.latir());