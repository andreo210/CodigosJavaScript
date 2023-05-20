let pessoa = {
    "nome": "andre",
    "idade": 39,
    "sexo" : "M"
}

let texto = JSON.stringify(pessoa); //converte em string

let jason = JSON.parse(texto); //converte em json

console.log(texto);
console.log(jason)