const pessoa = {
    _mao: 2,

    get mao() {
        return this._mao;
    },
    set mao(value) {
        this._mao = value;
    },


}
const pessoaNova = Object.create(pessoa)//cria um novo objeto

console.log(Object.getPrototypeOf(pessoaNova)); //vai imprimeir todas as propriedade dos objetos
