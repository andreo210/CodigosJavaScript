/*new Date(); // Retornar um Object Date
new Date(valor); //Valor inteiro em milissegundos com base em 01/01/1970;
new Date(dataString); //Date Time String Format - YYYY-MM-DDTHH:mm:ss.sssZ
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);*/

var data = new Date();
console.log(typeof data);//pega o tipo
console.log(data);//imprime data atual

//cria uma data
var dataString = new Date("2017-10-24");
console.log(dataString);//imprime essa data
console.log(dataString.getFullYear());//pega ano
console.log(dataString.getMonth()+1);//pega ames
console.log(dataString.getDay());//pega dia
console.log(dataString.getDate());
console.log(data.getHours());//pega hora
console.log(data.getMinutes());//pega minutos

var dataParam = new Date(2018,3,17);
console.log(dataParam);
