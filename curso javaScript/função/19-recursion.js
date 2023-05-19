//uma função que permite a funcão se chamar
//po ser um problema se ela se chamar muitas vezes

function recursao(n){

    if( n-1 < 2){      

        console.log("recursão parou");

    }else if(n%2 !=0 ){

        console.log("numero impar "+n);
        recursao(n-1);

    }else {

        console.log("numero par "+n);
        recursao(n-2);

    }

}

recursao(22);