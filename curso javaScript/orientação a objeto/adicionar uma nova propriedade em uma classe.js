class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");        
    }
}

Cachorro.prototype.pata = 4;//aqui voce cria um tipo padrão, com valores default, caso voce nõa de valor  esse sera

let labrador = new Cachorro("labrador", "preto");

console.log(labrador.pata);

console.log(labrador.latir());