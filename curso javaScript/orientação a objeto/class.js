let cachorro ={
    pata:4,
    raca:"",
    cor:"",

   latir: function(){
        console.log("au au")
    }
}

let pitbull = Object.create(cachorro);
pitbull.raca = "pit";
pitbull.cor = "preto";

console.log(pitbull)