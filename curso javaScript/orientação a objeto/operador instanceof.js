class Mamifero {
    constructor(raca){
        this.raca = raca;
    }
}

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, raca);
        this.raca = raca;
    }
    latir(){
        console.log("au au");        
    }
}


let pitoco = new Cachorro(4, "pudo");

pitoco.latir();

console.log(pitoco instanceof Mamifero)