function buscarAchorro(){
    const url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
    .then(resposta => resposta.json())
    .then(dados => dados.message)
    .then(console.log)
}

buscarAchorro()