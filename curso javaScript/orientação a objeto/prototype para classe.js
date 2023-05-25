function Cachorro (raca, pata, cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;

}

Cachorro.prototype.uivar = function(){console.log("au au au")}

let pudo = new Cachorro("pudo",4,"marrom");
pudo.uivar();