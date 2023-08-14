class Cachorro {
    
    constructor(raca, cor, pata){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
    }

    getRaca(){
        return this.raca
    }

    setRaca(raca){
        this.raca = raca;
    }
}

let cachorro = new Cachorro();
cachorro.setRaca= "Pastor Alemao";

console.log(cachorro.getRaca());