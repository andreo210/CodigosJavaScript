//cria uma expressão por meio deo new Regex

const reg1 = new RegExp("bola")

console.log(reg1.test("tem bola"));
console.log(reg1.test("tem não"));

const reg2 = new RegExp("/bola/")
let texto = "tem bola na cesta"

console.log(reg2.test("tem bola"));
console.log(reg2.test("tem não"));
console.log(reg2.test(texto));