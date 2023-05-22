 //valida CEP
 function ValidaCep(cep){
    exp = /\d{2}\.\d{3}\-\d{3}///verifica se tem um formato de CEP ex: 11.722-350
    if(!exp.test(cep.value))
    console.log('Numero de Cep Invalido!');               
}

console.log(ValidaCep("11.722-350"));