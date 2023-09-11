class Cachorro{
    constructor(raca,pata,cor){
        this.raca = raca;
        this.cor = cor;
        this.pata =pata;
    }

    latir(){
        console.log("au au");        
    }
}

Cachorro.prototype.pata = 4;//aqui voce cria um tipo padrão, com valores default, caso voce nõa de valor  esse sera
Cachorro.prototype.raca ="Vira lata";//aqui voce cria um tipo padrão, com valores default, caso voce nõa de valor  esse sera

let labrador = new Cachorro("labrador", 4, "preto");

console.log(labrador.pata);

labrador.latir();

console.log(Cachorro.prototype.raca);

console.log(labrador.raca);