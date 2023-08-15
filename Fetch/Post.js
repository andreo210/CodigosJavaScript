  
  
    const endpoint = "https://reqres.in/api/register"
    
    let dados = {
        username: "andre",
        email: "andreo210@hotmail.com",
        password: "123"
      }

    var cabecalho = {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify(dados),
      };
      const obterDados =()=>{
      fetch(endpoint, cabecalho)
        .then(response => response.json())//ja converte em texto ou vc pode colocar no formato que quiser , aqui vc vcai ter a resposta da api
        .then(dados =>{
            console.log(dados)
        })
        .catch(error => console.log('error', error));
      }
      btn_texto.addEventListener("click", (evt)=>{

        obterDados();
      })
