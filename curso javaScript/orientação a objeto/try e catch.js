//executa o cath caso ocorra um erro, a vantagem é que não para o codigo
//o finally é sempre executado
try{

    let a = 2+b;

}catch(e){

    console.log(e);
}finally{
    console.log("executou")
}