const url = "https://dog.ceo/api/breeds/image/random"
fetch(url)
    .then(resposta => resposta.json())
    .then(dados => dados.message)
    .then(console.log)

// const url = "https://bible-api.com/john_3:16"
// fetch(url)
//     .then(resposta => resposta.json())
//     .then(dados => dados.verses[0].text)
//     .then(console.log)