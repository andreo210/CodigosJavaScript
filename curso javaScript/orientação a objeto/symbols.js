class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");        
    }
}

let patas = Symbol(); //patas constantes

Cachorro.prototype[patas] // adiciona propriedade pata ao cachorro

