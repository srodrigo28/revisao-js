const inputBusca = document.querySelector("#input-busca")
const tabela     = document.querySelector("#tabela-bebidas")

inputBusca.addEventListener("keyup", () => {
    let filtro = inputBusca.value.toLowerCase()
    // console.log(filtro)

    let linhas = tabela.getElementsByTagName('tr')

    console.log(linhas)
    for ( let posicao in linhas) {
        if( true == isNaN(posicao)) {
            continue;
        }

        let conteudoLinha = linhas[posicao].innerHTML.toLocaleLowerCase();

        if( true === conteudoLinha.includes(filtro)) {
            linhas[posicao].style.display = '';
        }
        else{
            linhas[posicao].style.display = 'none'
        }
    }

})