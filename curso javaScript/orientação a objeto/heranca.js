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
}
console.log(Cachorro.toString())