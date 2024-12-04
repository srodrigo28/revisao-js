async function obterVersiculo(livro, cap, versiculo){
    const url = `https://bible-api.com/${livro}_${cap}:${versiculo}`

    const resposta = await fetch(url)
    const dados = await resposta.json()
    return dados.verses[0].text
}
async function executar() {
    const texto = await obterVersiculo('luke', 2, 2)
    console.log(texto)
}
executar()