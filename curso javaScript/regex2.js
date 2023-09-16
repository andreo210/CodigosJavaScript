//pode mos definir um conjunto de caracter para encontrar a regex
//basta por entre []

const reg1 =/[123456]/;

console.log(reg1.test("temos o numero 6"));
console.log(reg1.test("temos o numero 4"));

const reg2 =/[0-9]/;

console.log(reg2.test("temos o numero 64595985959"));
console.log(reg2.test("temos o numero "));
