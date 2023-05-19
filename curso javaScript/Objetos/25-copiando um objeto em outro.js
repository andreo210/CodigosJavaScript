let pessoa = {
    NOME: "Mateus",
    profissão: "Programador",
    idade: "39"
}

let raça={
    cor : "moreno",
    sexo: "hetero"
}

Object.assign(pessoa,raça)//copiando raca para pessoa

console.log(pessoa)