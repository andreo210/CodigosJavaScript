//pode criar um erro, caso alguma execusão não seja atendida
//porem as exceptions abortam o programa, só gera o erro
function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("precisa ser string");//da um exception caso o codigo falhe
    }else{
        console.log(`ola ${nome}`)
       }
}
saudacao("andre");
saudacao(5);