
var configuracao = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://reqres.in/api/users", configuracao)
  .then(response => response.json())//ja converte em texto ou vc pode colocar no formato que quiser , aqui vc vcai ter a resposta da api
  .then(result => console.log(result))
  .catch(error => console.log('error', error));