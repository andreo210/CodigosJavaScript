const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")


const obterDados =()=>{
const endpoint = "https://reqres.in/api/users"

var configuracao = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(endpoint, configuracao)
    .then(response => response.text())//ja converte em texto ou vc pode colocar no formato que quiser , aqui vc vcai ter a resposta da api
    .then(dados =>{
        console.log(dados)
        p_temp.innerHTML = dados
    })
    .catch(error => console.log('error', error));
}

let interval = setInterval(obterDados, 3000)