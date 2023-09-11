let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [];

function iteraArray(any){
    if(arr.length == 0){
        throw new Error("o array precisa ter elementos");
    }else{
        for(let i=0; i<arr.length; i++){
            console.log(i);
        }
    }
}


function ArrayVazio(any){
    if(arr2.length > 0){
        throw new Error("o array precisa ter elementos");
    }else{
        console.log("agora deu certo")
    }
}

iteraArray(arr2)
ArrayVazio(arr);